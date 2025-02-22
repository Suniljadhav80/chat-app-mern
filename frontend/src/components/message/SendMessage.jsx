import { IoMdSend } from "react-icons/io";
const SendMessage = () => {
  return (
    <form className='px-4 my-3 w-full' >
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					<IoMdSend />
				</button>
			</div>
		</form>
  )
}

export default SendMessage