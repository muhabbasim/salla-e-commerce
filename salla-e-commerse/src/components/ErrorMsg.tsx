interface MessageProps {
  message?: string;
}
export default function ErrorMsg({ message }: MessageProps) {
 
  return (
    <div className=' w-full flex p-2 items-center justify-center'>
      {message && <p style={{ color: "red", paddingBottom: '10px' }}>{message}</p>}
    </div>
  )
}
