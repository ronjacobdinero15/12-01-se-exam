import { Spinner } from '@nextui-org/react'
import { HiCheck, HiOutlineXMark } from 'react-icons/hi2'
import { useJob } from '../contexts/JobProvider'
import { useUpdateApplicantStatus } from '../features/applicants/useUpdateApplicantStatus'
import NavigateBack from '../ui/NavigateBack'
import Table from '../ui/Table'
import TableRow from '../ui/TableRow'
import { formatDate } from '../utils/helpers'
import { useGetJobApplications } from '../features/hr/useGetJobApplications'

function Applicants() {
  const { jobApplications } = useGetJobApplications()
  const { updateApplicantStatus, isUpdating } = useUpdateApplicantStatus()
  const { jobCount } = useJob()

  function handleApplication(application_id, decisionStatus) {
    updateApplicantStatus({ application_id, decision_status: decisionStatus })
  }

  return (
    <div>
      <NavigateBack />

      <Table>
        <thead>
          <TableRow style="header">
            <th>Applicant ID</th>
            <th>Applicant Name</th>
            <th>Job Applying</th>
            <th>Years of Experience</th>
            <th>Date Applied</th>
            <th>Action</th>
          </TableRow>
        </thead>
        <tbody>
          {jobCount === 0 ? (
            <tr>
              <td colSpan="6" className="text-xl text-center ">
                Sorry, but no data available 😭
              </td>
            </tr>
          ) : (
            jobApplications.map(
              job =>
                job.status === 'pending' && (
                  <TableRow
                    key={job.application_id}
                    className="hover:bg-gray-100"
                  >
                    <td className="w-[8rem]">{job.applicant_id}</td>
                    <td>{job.applicant_name}</td>
                    <td>{job.job_title}</td>
                    <td className="w-[12rem]">{job.years_of_experience}</td>
                    <td className="w-[15rem]">{formatDate(job.applied_at)}</td>
                    <td className="w-[10rem] [&_button]:border-3 [&_button]:rounded-full [&_button]:hover:cursor-pointer [&_button]:text-center space-x-2 [&_button]:transition-all">
                      <button
                        className="text-green-500 border-2 border-green-500 hover:bg-green-500 group"
                        onClick={() =>
                          handleApplication(job.application_id, 'accepted')
                        }
                      >
                        {isUpdating ? (
                          <Spinner />
                        ) : (
                          <HiCheck
                            size={20}
                            className="group-hover:text-white"
                          />
                        )}
                      </button>

                      <button
                        className="text-red-500 border-red-500 group hover:bg-red-500"
                        onClick={() =>
                          handleApplication(job.application_id, 'rejected')
                        }
                      >
                        {isUpdating ? (
                          <Spinner />
                        ) : (
                          <HiOutlineXMark
                            size={20}
                            className="group-hover:text-white"
                          />
                        )}
                      </button>
                    </td>
                  </TableRow>
                )
            )
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Applicants
