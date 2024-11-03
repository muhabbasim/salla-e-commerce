

interface ButtonProps {
  buttonFunc: (productId: number) => void;
  funcProp: number;
  title: string;
}

export default function FunctionButton({buttonFunc, funcProp, title}: ButtonProps) {
  return (
    <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md"
      onClick={() => buttonFunc(funcProp)}
    >
      {title}
    </button>
  )
}
