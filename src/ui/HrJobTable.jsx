import { HiMiniEllipsisVertical } from 'react-icons/hi2'
import { formatDate } from '../utils/helpers'
import Table from './Table'
import TableRow from './TableRow'

function HrJobTable({ jobsPosted }) {
  return (
    <div className="mt-6">
      <h2 className="mb-4 text-lg font-semibold">Jobs Posted List</h2>
      <Table>
        <thead>
          <TableRow style="header">
            <th>ID</th>
            <th>Job Title</th>
            <th>Description</th>
            <th>Created Date</th>
            <th>Actions</th>
          </TableRow>
        </thead>
        <tbody>
          {jobsPosted.length > 0 &&
            jobsPosted.map(job => (
              <TableRow key={job.id} className="hover:bg-gray-100">
                <td className="w-[5rem]">{job.id}</td>
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

export default HrJobTable
