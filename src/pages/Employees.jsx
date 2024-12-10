import { useGetPendingApplications } from '../features/hr/useGetPendingApplications'
import NavigateBack from '../ui/NavigateBack'
import Table from '../ui/Table'
import TableRow from '../ui/TableRow'
import { formatDate } from '../utils/helpers'

function Employees() {
  const { pendingApplications } = useGetPendingApplications()

  const employees = pendingApplications.filter(
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
                <td className="w-[8rem]">{employee.applicant_id}</td>
                <td>{employee.applicant_name}</td>
                <td>{employee.applicant_title}</td>
                <td className="w-[12rem]">{employee.years_of_experience}</td>
                <td className="w-[15rem]">{formatDate(employee.applied_at)}</td>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Employees
