<?php

require_once 'dbConfig.php';
require_once 'models.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    handleGet($pdo);
} elseif ($method === 'POST') {
    handlePost($pdo);
} elseif ($method === 'PUT') {
    handlePut($pdo);
} elseif ($method === 'DELETE') {
    handleDelete($pdo);
}

function handleGet($pdo) {
    switch ($_GET['action']) {
        case 'getAllJobs':
            echo json_encode(getAllJobs($pdo));
            break;
        case 'getJobsPosted':
            echo json_encode(getJobsPosted($pdo, $_GET['hr_id']));
            break;
        case 'getPendingApplications':
            echo json_encode(getPendingApplications($pdo, $_GET['hr_id']));
            break;
        // case 'getDoctorByID':
        //     echo json_encode(getDoctorByID($pdo, $_GET['doctor_id']));
        //     break;
        // case 'getActivityLogs':
        //     echo json_encode(getActivityLogs($pdo));
        //     break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
}

function handlePost($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);

    switch ($_GET['action']) {
        case 'login':
            echo json_encode(login($pdo, $data['username'], sha1($data['password'])));
            break;
        case 'jobPost':
            echo json_encode(jobPost($pdo, $data['jobTitle'], $data['jobDescription'], $data['created_by']));
            break;
        case 'applyJob':
            echo json_encode(applyJob($pdo, $data['job_id'], $data['job_title'], $data['job_description'], $data['applicant_id'], $data['applicant_name'], $data['years_of_experience'], $data['hr_id']));
            break;
        // case 'searchDoctor':
        //     echo json_encode(searchDoctor($pdo, $data['searchQuery'], $data['activeUserId'], $data['activeUser']));
        //     break;
        // case 'insertDoctor':
        //     echo json_encode(insertDoctor($pdo, $data['email'], $data['username'], sha1($data['password']), $data['first_name'], $data['last_name'], $data['years_of_experience'], $data['specialization'], $data['contact'], $data['activeUserId'], $data['activeUser']));
        //     break;
        // case 'deleteDoctor':
        //     echo json_encode(deleteDoctor($pdo, $data['doctor_id'], $data['username'], $data['activeUserId'], $data['activeUser']));
        //     break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
}

function handlePut($pdo) {
    $data = json_decode(file_get_contents("php://input"), true);

    switch ($_GET['action']) {
        case 'updateApplicantStatus':
            echo json_encode(updateApplicantStatus($pdo, $data['application_id'], $data['decision_status']));
            break;
        // case 'updateDoctor':
        //     echo json_encode(updateDoctor($pdo, $_GET['doctor_id'], $data['email'], $data['username'], $data['first_name'], $data['last_name'], $data['years_of_experience'], $data['specialization'], $data['contact'], $data['activeUserId'], $data['activeUser']));
        //     break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
}

/* HAD TO PLACE THE DELETION ON POST METHOD SO I CAN PASS THE activeUserId AND activeUser FOR ACTIVITY LOGS */
// function handleDelete($pdo) {
//     switch($_GET['action']) {
//         case 'deleteDoctor':
//             echo json_encode(deleteDoctor($pdo, $_GET['doctor_id']));
//             break;
//         default:
//             echo json_encode(['error' => 'Invalid action']);
//     }
// }