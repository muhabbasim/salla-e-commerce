import Translatable from "./translatable_text/Translatable";

export interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {

  return(
    <div className={`flex flex-col ${className}`}>
      <h2 className=""><Translatable>{title}</Translatable></h2>
    </div>
  )
}
  

export default Title;
