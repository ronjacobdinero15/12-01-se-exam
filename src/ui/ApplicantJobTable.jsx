import { Button, Spinner } from '@nextui-org/react'
import { useApplyJob } from '../features/applicants/useApplyJob'
import { useSession } from '../hooks/useSession'
import Table from './Table'
import { useGetAllJobs } from '../features/applicants/useGetAllJobs'
import TableRow from './TableRow'
import { TiMessage } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const ApplicantJobTable = () => {
  const { jobs, error, isLoading } = useGetAllJobs() // Fetch jobs for the user
  const { applyJob, isApplying } = useApplyJob()
  const {
    id: applicant_id,
    fullName: applicant_name,
    yearsOfExp: years_of_experience,
  } = useSession()

  if (isLoading) return <Spinner size="lg" />
  if (error) return <p>{error.message}</p>

  function handleApplyJob(job_id, job_title, job_description, hr_id) {
    applyJob({
      job_id,
      job_title,
      job_description,
      applicant_id,
      applicant_name,
      years_of_experience,
      hr_id,
    })
  }

  function handleMessage(hr_id) {}

  return (
    <Table>
      <thead>
        <TableRow style="header">
          <th>Job ID</th>
          <th>Job Title</th>
          <th>Description</th>
          <th>Apply</th>
          <th>Message</th>
        </TableRow>
      </thead>
      <tbody className="rounded-md">
        {jobs.length === 0 ? (
          <tr>
            <td colSpan="4">No jobs available to apply for.</td>
          </tr>
        ) : (
          jobs.map(job => (
            <TableRow key={job.job_id}>
              <td className="text-gray-800 w-[6rem]">{job.job_id}</td>
              <td className="text-gray-800 w-[20rem]">{job.job_title}</td>
              <td className="text-gray-600 ">{job.job_description}</td>
              <td className="w-[5rem]">
                <Button
                  onClick={() =>
                    handleApplyJob(
                      job.job_id,
                      job.job_title,
                      job.job_description,
                      job.hr_id
                    )
                  }
                  disabled={isApplying}
                >
                  {isApplying ? <Spinner color="success" /> : 'Apply'}
                </Button>
              </td>
              <td>
                <Link
                  to={`message/${job.hr_id}`}
                  className="flex justify-center"
                >
                  <TiMessage size={25} />
                </Link>
              </td>
            </TableRow>
          ))
        )}
      </tbody>
    </Table>
  )
}

export default ApplicantJobTable
