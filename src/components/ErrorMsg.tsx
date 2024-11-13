interface MessageProps {
  message: string;
  className?: string;
}
export default function ErrorMsg({ message, className }: MessageProps) {
 
  return (
    <div className={className}>
      {message && <p style={{ color: "red", paddingBottom: '10px' }}>{message}</p>}
    </div>
  )
}
