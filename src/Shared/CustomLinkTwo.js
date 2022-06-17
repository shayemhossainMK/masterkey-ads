import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinkTwo({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#ED6949" : "#65509c",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLinkTwo;
