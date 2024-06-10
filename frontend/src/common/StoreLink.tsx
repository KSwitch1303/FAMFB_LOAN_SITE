import { ButtonLinkProps } from "./ButtonLink";
import { Link } from "react-router-dom";
function StoreLink({
  href,
  className,
  target,
  logo,
  upperText,
  lowerText,
}: ButtonLinkProps) {
  return (
    <Link to={href} className={className} target={target}>
      <div>

        <p>{lowerText}</p>
      </div>
    </Link>
  );
}

export default StoreLink;
