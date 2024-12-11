import { Button, Spinner } from '@nextui-org/react'
import { HiMiniPlus, HiOutlineUsers } from 'react-icons/hi2'
import { LuBuilding } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { useJob } from '../contexts/JobProvider'
import { useGetJobsPosted } from '../features/hr/useGetJobsPosted'
import { useSession } from '../hooks/useSession'
import Container from '../ui/Container'
import Header from '../ui/Header'
import HrJobTable from '../ui/HrJobTable'
import Logout from '../ui/Logout'
import MessagesList from '../ui/MessagesList'
import SearchQuery from '../ui/SearchQuery'

function HrDashboard() {
  const { username } = useSession()
  const navigate = useNavigate()
  const { jobsPosted, isLoading, error } = useGetJobsPosted()
  const { employees, jobCount } = useJob()

  if (isLoading) return <Spinner size="lg" />

  if (error) return <p>{error.message}</p>

  return (
    <div className="h-full p-6">
      <Container>
        <Header as="h3">
          Welcome, HR <span className="font-bold">{username}</span>! Here’s your
          dashboard.
        </Header>

        <Container>
          <Button
            variant="light"
            color="success"
            onClick={() => navigate('employees')}
            className="relative"
          >
            <LuBuilding className="size-7" />
            {employees.length > 0 && (
              <span className="absolute bottom-0 z-20 flex items-center justify-center text-white bg-green-500 rounded-full left-4 size-5">
                {employees.length}
              </span>
            )}
          </Button>

          <Button
            variant="light"
            color="success"
            onClick={() => navigate('applicants')}
            className="relative"
          >
            <HiOutlineUsers className="size-8" />
            {jobCount > 0 && (
              <span className="absolute bottom-0 z-20 flex items-center justify-center text-white bg-green-500 rounded-full left-4 size-5">
                {jobCount}
              </span>
            )}
          </Button>

          <Logout />

          <Button
            size="md"
            color="success"
            className="flex items-center text-white text-md"
            onClick={() => navigate('post-job')}
          >
            <HiMiniPlus size={25} />
            <span>Post Job</span>
          </Button>
        </Container>
      </Container>

      <div className="grid grid-cols-[2fr_1fr] gap-x-5">
        <div className="space-y-5">
          <SearchQuery />

          <HrJobTable jobsPosted={jobsPosted} />
        </div>

        <MessagesList />
      </div>
    </div>
  )
}

export default HrDashboard
