import Loader from "../Loader";
import Translatable from "../translatable_text/Translatable";


interface ButtonProps {
  onClick?: (el: any) => void;
  className?: string;
  title?: string;
  isSubmitting?: boolean;
  icon?: any;
  type?: any;
}

export default function ButtonComponent({onClick, title, isSubmitting, className, icon, type}: ButtonProps) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} className={className}
      onClick={handleClick}
    >
      {icon}
      {isSubmitting 
        ? <> <Loader/> <Translatable>Processing...</Translatable> </> 
        : title && <Translatable>{title}</Translatable>
      }  
    </button>
  )
}
