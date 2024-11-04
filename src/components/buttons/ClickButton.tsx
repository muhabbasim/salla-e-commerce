
interface ButtonProps {
  buttonFunc: () => void;
  title: string;
}

export default function ClickButton({buttonFunc, title}: ButtonProps) {
  return (
    <button onClick={buttonFunc} className="w-full bg-primary text-white p-3 rounded-md">
      {title}
    </button>
  )
}
