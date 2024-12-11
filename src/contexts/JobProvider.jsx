import { createContext, useContext } from 'react'
import { useGetJobApplications } from '../features/hr/useGetJobApplications'
import { useGetAllJobs } from '../features/applicants/useGetAllJobs'

const JobContext = createContext()

function JobProvider({ children }) {
  const { jobApplications } = useGetJobApplications()
  // const { jobs, error, isLoading } = useGetAllJobs()

  const employees = jobApplications?.filter(
    application => application.status === 'accepted'
  )

  const jobCount = jobApplications.filter(
    job => job.status === 'pending'
  ).length

  // useEffect(() => {
  //   const updatedList = jobs.filter(job => {
  //     const alreadyApplied = jobApplications?.some(
  //       application =>
  //         application.job_id === job.job_id && application.applicant_id === id
  //     )
  //     return !alreadyApplied
  //   })
  //   setFilteredJobs(updatedList)
  // }, [jobs, pendingApplications, id])

  return (
    <JobContext.Provider value={{ jobApplications, employees, jobCount }}>
      {children}
    </JobContext.Provider>
  )
}

function useJob() {
  const context = useContext(JobContext)

  if (!context) {
    throw new Error('useJob must be used within a JobProvider')
  }

  return context
}

export { JobProvider, useJob }
