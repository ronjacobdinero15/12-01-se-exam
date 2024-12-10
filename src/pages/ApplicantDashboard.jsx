import { useSession } from '../hooks/useSession'
import ApplicantJobTable from '../ui/ApplicantJobTable'
import Container from '../ui/Container'
import Header from '../ui/Header'
import Logout from '../ui/Logout'
import SearchQuery from '../ui/SearchQuery'

function ApplicantDashboard() {
  const { username } = useSession()

  return (
    <main className="h-full">
      <Container>
        <Header as="h2">
          Welcome, <span className="font-bold">{username}</span>! Here’s your
          dashboard.
        </Header>
        <Logout />
      </Container>

      <div className="grid grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <SearchQuery />

          <ApplicantJobTable />
        </div>

        <div></div>
      </div>
    </main>
  )
}

export default ApplicantDashboard
