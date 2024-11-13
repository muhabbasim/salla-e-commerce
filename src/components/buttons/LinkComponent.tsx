type LinkProps = {
  title: string;
  href: string;
}

export default function LinkComponent({ title, href }: LinkProps) {
  return (
    <a href={href} className="w-fit text-primary underline p-2 text-md rounded-md">{title}</a>
  )
}
