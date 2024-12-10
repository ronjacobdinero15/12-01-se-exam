<?php  

require_once 'dbConfig.php';

// function getActivityLogs($pdo) {
// 	$sql = "SELECT * FROM activity_logs";
// 	$stmt = $pdo->prepare($sql);
// 	$executeQuery = $stmt->execute();

// 	if ($executeQuery) {
// 		return $stmt->fetchAll();
// 	}
// }

function login($pdo, $username, $password) {
    $loginQuery = checkIfUserExists($pdo, $username);

    if ($loginQuery['status'] === 400) {
        return $loginQuery;
    }

    $userInfo = $loginQuery['userInfoArray'];
    $passwordFromDB = $userInfo['password'];

    if ($password === $passwordFromDB) {
        return [
            "status" => 200,
            "id" => $userInfo['applicant_id'] ?? $userInfo['hr_id'], // Choose correct ID column
            "username" => $userInfo['username'],
            "role" => $loginQuery['role'],
            "message" => "{$userInfo['username']} logged in successfully."
        ];
    } else {
        return [
            "status" => 400,
            "message" => "Username/password is incorrect. Try again."
        ];
    }
}

function checkIfUserExists($pdo, $username) {
    $tables = ['applicant', 'hr']; // Tables to check
    
    foreach ($tables as $table) {
        $sql = "SELECT * FROM $table WHERE username = ?";
        $stmt = $pdo->prepare($sql);
        if ($stmt->execute([$username])) {
            $userInfoArray = $stmt->fetch();
            if ($userInfoArray) {
                return [
                    "status" => 200,
                    "userInfoArray" => $userInfoArray,
                    "role" => $table
                ];
            }
        }
    }
    return [
        "status" => 400,
        "message" => "Username/password is incorrect. Try again."
    ];
}

function getAllJobs($pdo) {
	$sql = "SELECT * FROM job_posts";
	$stmt = $pdo->prepare($sql);
	$executeQuery = $stmt->execute();

	if ($executeQuery) {
		return $stmt->fetchAll();
	}
}

function getJobApplications($pdo, $hr_id) {
	$sql = "SELECT * FROM job_applications WHERE hr_id = ?";
	$stmt = $pdo->prepare($sql);
	$executeQuery = $stmt->execute([$hr_id]);
	if ($executeQuery) {
        return $stmt->fetchAll();
	}
}

// function getJobApplications($pdo, $ID) {
// 	$sql = "SELECT * FROM doctors WHERE doctor_id = ?";
// 	$stmt = $pdo->prepare($sql);
// 	$executeQuery = $stmt->execute([$doctor_id]);
// 	if ($executeQuery) {
//         return $stmt->fetch();
// 	}
// }

// function getDoctorByID($pdo, $doctor_id) {
// 	$sql = "SELECT * FROM doctors WHERE doctor_id = ?";
// 	$stmt = $pdo->prepare($sql);
// 	$executeQuery = $stmt->execute([$doctor_id]);
// 	if ($executeQuery) {
//         return $stmt->fetch();
// 	}
// }

function getJobsPosted($pdo, $hr_id) {
	$sql = "SELECT * FROM job_posts WHERE hr_id = ?";
	$stmt = $pdo->prepare($sql);
	$executeQuery = $stmt->execute([$hr_id]);
    
	if ($executeQuery) {
        return $stmt->fetchAll();
	}
}

// function searchDoctor($pdo, $searchQuery, $activeUserId, $activeUser) {
// 	$sql = "SELECT * FROM doctors WHERE 
// 			CONCAT(email, username, first_name, last_name, years_of_experience, specialization, contact) 
// 			LIKE ?";

// 	$stmt = $pdo->prepare($sql);
// 	$executeQuery = $stmt->execute(["%".$searchQuery."%"]);
// 	if ($executeQuery) {
//         $insertAnActivityLog = insertAnActivityLog($pdo, "Searched {$searchQuery} by {$activeUser}", $activeUserId, $activeUser);
            
//         if($insertAnActivityLog) {
// 		    return $stmt->fetchAll();
//         }
// 	}
// }

// function insertAnActivityLog($pdo, $operation, $activeUserId, $activeUser) {
// 	$sql = "INSERT INTO activity_logs (operation, activeUserId, activeUser) VALUES(?,?,?)";

// 	$stmt = $pdo->prepare($sql);
// 	$executeQuery = $stmt->execute([$operation, $activeUserId, $activeUser]);

// 	if ($executeQuery) {
// 		return true;
// 	}
// }

function jobPost($pdo, $jobTitle, $jobDescription, $created_by) {
    $sql = "INSERT INTO job_posts (jobTitle, jobDescription, created_by) VALUES(?,?,?)";
    $stmt = $pdo->prepare($sql);
    $executeQuery = $stmt->execute([$jobTitle, $jobDescription, $created_by]);

    if ($executeQuery) {
        return [
            "success" => 200, 
            "message" => "Job successfully posted!" 
        ];
    } else {
        return [
            "success" => 400, 
            "message" => "Job failed to post!" 
        ];
    }
}

function applyJob($pdo, $job_id, $jobTitle, $jobDescription, $applicant_id, $hr_id) {
    $sql = "INSERT INTO job_applications (job_id, jobTitle, jobDescription, applicant_id, hr_id) VALUES(?,?,?,?,?)";
    $stmt = $pdo->prepare($sql);
    $executeQuery = $stmt->execute([$job_id, $jobTitle, $jobDescription, $applicant_id, $hr_id]);

    if ($executeQuery) {
        return [
            "success" => 200, 
            "message" => "Applied successfully. Please wait for approval!" 
        ];
    } else {
        return [
            "success" => 400, 
            "message" => "An error occurred from the query" 
        ];
    }
}


// function insertDoctor($pdo, $email, $username, $password, $first_name, $last_name, $years_of_experience, $specialization, $contact, $activeUserId, $activeUser) {
//     $checkUserSql = "SELECT * FROM doctors WHERE username = ?";
//     $checkUserSqlStmt = $pdo->prepare($checkUserSql);
//     $checkUserSqlStmt->execute([$username]);

//     if ($checkUserSqlStmt->rowCount() == 0) {
//         $sql = "INSERT INTO doctors (email, username, password, first_name, last_name, years_of_experience, specialization, contact) VALUES(?,?,?,?,?,?,?,?)";
//         $stmt = $pdo->prepare($sql);
//         $executeQuery = $stmt->execute([$email, $username, $password, $first_name, $last_name, $years_of_experience, $specialization, $contact]);

//         if ($executeQuery) {
//             $insertAnActivityLog = insertAnActivityLog($pdo, "Created {$username} account", $activeUserId, $activeUser);
            
//             if($insertAnActivityLog) {
//                 return [
//                     "success" => 200, 
//                     "message" => "User successfully registered!" 
//                 ];
//             }
//         }
//         else {
//             return [
//                 "success" => 400, 
//                 "message" => "An error occurred from the query" 
//             ];
//         }
//     }
//     else {
//         return [
//             "success" => 400, 
//             "message" => "Username already exists" 
//         ];
//     }
// }

// function updateDoctor($pdo, $doctor_id, $email, $username, $first_name, $last_name, $years_of_experience, $specialization, $contact, $activeUserId, $activeUser) {  
//     $sql = "UPDATE doctors SET email = ?, username = ?, first_name = ?, last_name = ?, years_of_experience = ?, specialization = ?, contact = ? WHERE doctor_id = ?";
//     $stmt = $pdo->prepare($sql);
//     $executeQuery = $stmt->execute([$email, $username, $first_name, $last_name, $years_of_experience, $specialization, $contact, $doctor_id]);

//     if ($executeQuery) {
//         $insertAnActivityLog = insertAnActivityLog($pdo, "Updated {$username} account", $activeUserId, $activeUser);
            
//         if($insertAnActivityLog) {
//             return [
//                 "success" => 200, 
//                 "message" => "{$username} account successfully updated!" 
//             ];
//         }   

//     } else {
//         return [
//             "success" => 400, 
//             "message" => "{$username} account failed to update!" 
//         ];
//     }
// }

// function deleteDoctor($pdo, $doctor_id, $username, $activeUserId, $activeUser) {
//     $sql = "DELETE FROM doctors WHERE doctor_id = ?";
//     $stmt = $pdo->prepare($sql);
//     $executeQuery = $stmt->execute([$doctor_id]);

//     if ($executeQuery) {
//         $insertAnActivityLog = insertAnActivityLog($pdo, "Deleted {$username} account", $activeUserId, $activeUser);
            
//         if($insertAnActivityLog) {
//             return [
//                 "success" => 200, 
//                 "message" => "{$username} account is successfully deleted!"
//             ];
//         }
//     } else {
//         return [
//             "success" => 400,
//             "message" => "Failed to delete {$username} account. Please try again"
//         ];
//     }
// }