import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import { useSession } from './hooks/useSession'
import ApplicantDashboard from './pages/ApplicantDashboard'
import HrDashboard from './pages/HrDashboard'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './ui/AppLayout'
import ProtectedRoute from './ui/ProtectedRoute'
import Register from './pages/Register'
import CreateJob from './pages/CreateJob'
import Applicants from './pages/Applicants'
import Employees from './pages/Employees'
import { JobProvider } from './contexts/JobProvider'

const queryClient = new QueryClient()

function App() {
  const { role } = useSession()

  return (
    <QueryClientProvider client={queryClient}>
      <JobProvider>
        <ReactQueryDevtools initialIsOpen={false} />

        <Router>
          <Routes>
            {/* Protected Routes */}
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* Redirect based on role */}
              <Route
                path="/"
                element={
                  role === 'applicant' ? (
                    <Navigate to="/applicant" />
                  ) : (
                    <Navigate to="/hr" />
                  )
                }
              />

              <Route path="/applicant" element={<ApplicantDashboard />}>
                <Route path="message/:messageId" element={<Employees />} />
              </Route>

              <Route path="/hr">
                <Route index element={<HrDashboard />} />
                <Route path="post-job" element={<CreateJob />} />
                <Route path="applicants" element={<Applicants />} />
                <Route path="employees" element={<Employees />} />
              </Route>
            </Route>

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '800px',
              padding: '16px 24px',
              backgroundColor: 'white',
            },
          }}
        />
      </JobProvider>
    </QueryClientProvider>
  )
}

export default App
