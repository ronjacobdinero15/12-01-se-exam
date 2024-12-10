import { Button, Spinner } from '@nextui-org/react'
import { useGetAllJobs } from '../features/applicants/useGetAllJob'
import Table from './Table'
import TableRow from './TableRow'
import { useApplyJob } from '../features/applicants/useApplyJob'
import { useSession } from '../hooks/useSession'

const ApplicantJobTable = () => {
  const { jobs, error, isLoading } = useGetAllJobs()
  const { applyJob, isApplying } = useApplyJob()
  const { id: applicant_id } = useSession()

  if (isLoading) return <Spinner size="lg" />

  if (error) return <p>{error.message}</p>

  function handleApplyJob(id, jobTitle, jobDescription, hr_id) {
    applyJob({
      job_id: id,
      jobTitle,
      jobDescription,
      applicant_id,
      hr_id,
    })
  }

  return (
    <Table>
      <thead>
        <TableRow style="header">
          <th>Job Title</th>
          <th>Description</th>
          <th>Apply</th>
        </TableRow>
      </thead>

      <tbody>
        {jobs.map(job => (
          <TableRow key={job.id}>
            <td className="text-gray-800 w-[20rem]">{job.jobTitle}</td>
            <td className="text-gray-600 ">{job.jobDescription}</td>
            <td className="w-[5rem]">
              <Button
                onClick={() =>
                  handleApplyJob(
                    job.id,
                    job.jobTitle,
                    job.jobDescription,
                    job.hr_id
                  )
                }
                disabled={isApplying}
              >
                {isApplying ? <Spinner color="success" /> : 'Apply'}
              </Button>
            </td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}
/* 

 */
export default ApplicantJobTable
