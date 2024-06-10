import { Link } from "react-router-dom";
export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  logo?: string;
  upperText?: string;
  lowerText?: string;
  onClick?: string;
}

function ButtonLink({ href, children, className, target }: ButtonLinkProps) {
  return (
    <Link
      to={href}
      children={children}
      className={className}
      target={target}
    ></Link>
  );
}

export default ButtonLink;
