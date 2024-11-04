import Loader from "../Loader";

interface ButtonProps {
  isSubmitting: boolean;
  title: string;
}

export default function SubmitButton({isSubmitting, title}: ButtonProps) {
  return (
    <button type="submit" className="flex justify-center items-center gap-2 w-full bg-primary text-white flex-1 p-2 rounded-md">
      {isSubmitting && <Loader/>}
      {isSubmitting ? "جاري العملية..." : "دخول" }  
    </button>
  )
}
