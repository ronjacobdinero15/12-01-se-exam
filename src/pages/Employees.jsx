import { useGetJobApplications } from '../features/hr/useGetJobApplications'
import NavigateBack from '../ui/NavigateBack'
import Table from '../ui/Table'
import TableRow from '../ui/TableRow'
import { formatDate } from '../utils/helpers'

function Employees() {
  const { jobApplications } = useGetJobApplications()

  const employees = jobApplications.filter(
    application => application.status === 'accepted'
  )

  return (
    <div>
      <NavigateBack />

      <Table>
        <thead>
          <TableRow style="header">
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Job Title</th>
          </TableRow>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-xl text-center ">
                Sorry, but no data available 😭
              </td>
            </tr>
          ) : (
            employees.map(employee => (
              <TableRow
                key={employee.application_id}
                className="hover:bg-gray-100"
              >
                <td className="w-[10rem]">{employee.applicant_id}</td>
                <td>{employee.applicant_name}</td>
                <td>{employee.job_title}</td>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Employees
