import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { usePostJob } from '../features/hr/useJobPost'
import { useSession } from '../hooks/useSession'

function CreateJobForm() {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const { postJob, isLoading } = usePostJob()
  const { id } = useSession()

  function handleJobPost(e) {
    e.preventDefault()

    if (!jobTitle || !jobDescription) return

    postJob({
      job_title: jobTitle,
      job_description: jobDescription,
      hr_id: id,
    })
  }

  return (
    <form
      className="max-w-lg p-6 mx-auto space-y-6 bg-white rounded-lg shadow-md"
      onSubmit={handleJobPost}
    >
      <h2 className="text-xl font-semibold text-center text-gray-700">
        Create Job Post
      </h2>

      {/* Job Title */}
      <div>
        <label
          htmlFor="jobTitle"
          className="block mb-1 text-sm font-medium text-gray-600"
        >
          Job Title
        </label>
        <input
          type="text"
          name="jobTitle"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Software Engineer"
          required
          value={jobTitle}
          onChange={e => setJobTitle(e.target.value)}
        />
      </div>

      {/* Job Description */}
      <div>
        <label
          htmlFor="jobDescription"
          className="block mb-1 text-sm font-medium text-gray-600"
        >
          Job Description
        </label>
        <textarea
          name="jobDescription"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Write a detailed job description..."
          required
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button
          isLoading={isLoading}
          type="submit"
          color="success"
          className="px-6 py-2 text-lg text-white"
          spinner={
            <svg
              className="w-5 h-5 text-current animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          }
        >
          {isLoading ? 'Posting Job...' : 'Post Job'}
        </Button>
      </div>
    </form>
  )
}

export default CreateJobForm
