import { HiMiniEllipsisVertical } from 'react-icons/hi2'
import { useGetJobApplications } from '../features/hr/useGetJobApplications'
import NavigateBack from '../ui/NavigateBack'
import Table from '../ui/Table'
import TableRow from '../ui/TableRow'
import { formatDate } from '../utils/helpers'

function Applicants() {
  const { jobApplications } = useGetJobApplications()

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
            <th>Actions</th>
          </TableRow>
        </thead>
        <tbody>
          {jobApplications.length > 0 &&
            jobApplications.map(job => (
              <TableRow key={job.id} className="hover:bg-gray-100">
                <td className="w-[10rem]">{job.id}</td>
                <td>{job.jobTitle}</td>
                <td>{job.jobDescription}</td>
                <td className="w-[15rem]">{formatDate(job.created_at)}</td>
                <td className="w-[1rem]">
                  <HiMiniEllipsisVertical />
                </td>
              </TableRow>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Applicants
