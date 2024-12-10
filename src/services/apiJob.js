import { apiUrl } from '../utils/links'

export async function postJob({ jobTitle, jobDescription, created_by }) {
  const res = await fetch(`${apiUrl}?action=jobPost`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jobTitle, jobDescription, created_by }),
  })

  if (!res.ok) throw new Error('Error posting job')

  return await res.json()
}

export async function getAllJobs() {
  const res = await fetch(`${apiUrl}?action=getAllJobs`)

  if (!res.ok) throw new Error('Error getting all job')

  return await res.json()
}

export async function applyJob({
  job_id,
  jobTitle,
  jobDescription,
  applicant_id,
  hr_id,
}) {
  console.log(hr_id)
  const res = await fetch(`${apiUrl}?action=applyJob`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      job_id,
      jobTitle,
      jobDescription,
      applicant_id,
      hr_id,
    }),
  })

  if (!res.ok) throw new Error('Error applying job')

  return await res.json()
}

export async function getJobApplications(hr_id) {
  const res = await fetch(`${apiUrl}?action=getJobApplications&hr_id=${hr_id}`)

  if (!res.ok) throw new Error('Error getting job applications')

  return await res.json()
}

export async function getJobsPosted(hr_id) {
  const res = await fetch(`${apiUrl}?action=getJobsPosted&hr_id=${hr_id}`)

  if (!res.ok) throw new Error('Error getting posted job applications')

  return await res.json()
}
