import { IoMdSend } from 'react-icons/io'
import { useSession } from '../hooks/useSession'

function MessagesList() {
  const { id } = useSession()

  const messages = [
    {
      message_id: 1,
      sender_id: 1,
      sender_name: 'John Doe',
      receiver_id: 2,
      receiver_name: 'Jane Doe',
      message:
        'Good morning maam/sir, makiki status update lang po sana ako sa job application ko po? ',
    },
    {
      message_id: 2,
      sender_id: 2,
      sender_name: 'John Doe',
      receiver_id: 1,
      receiver_name: 'John Doe',
      message: 'Sir as of now we are reviewing your application.',
    },
    {
      message_id: 3,
      sender_id: 2,
      sender_name: 'Jane Doe',
      receiver_id: 1,
      receiver_name: 'John Doe',
      message: 'Please wait. Thank you',
    },
    {
      message_id: 4,
      sender_id: 1,
      sender_name: 'Jane Doe',
      receiver_id: 2,
      receiver_name: 'Jane Doe',
      message: 'Ok. Thanks :)',
    },
    {
      message_id: 5,
      sender_id: 2,
      sender_name: 'Jane Doe',
      receiver_id: 1,
      receiver_name: 'John Doe',
      message: "Good news! You're hired pero kiss muna",
    },
    {
      message_id: 5,
      sender_id: 1,
      sender_name: 'John Doe',
      receiver_id: 2,
      receiver_name: 'Jane Doe',
      message: 'Ok sige 😘',
    },
  ]

  return (
    <div className="flex flex-col justify-between w-full p-4 border border-collapse border-gray-300 rounded-md ">
      <div className="space-y-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`relative flex mt-12 ${
              msg.sender_id === id && 'justify-end'
            }`}
          >
            {index === 0 ||
              (messages[index - 1].sender_name !== msg.sender_name && (
                <>
                  <span
                    className={`absolute text-xs -top-5 ${
                      msg.sender_id === id ? 'right-0' : 'left-0'
                    }`}
                  >
                    {msg.sender_name}
                  </span>
                  <div className="mb-12"></div>
                </>
              ))}

            <div
              className={`p-2 rounded-md inline-block max-w-80 ${
                msg.sender_id === id ? 'bg-green-200' : 'bg-gray-200'
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full py-3 pl-2 pr-16 text-lg border border-gray-300 rounded-md bg-gray-50"
        />
        <IoMdSend className="absolute cursor-pointer top-4 right-5 size-6" />
      </div>
    </div>
  )
}

export default MessagesList
