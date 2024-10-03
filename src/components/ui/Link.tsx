import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";

interface LinkProps extends RouterLinkProps {
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, className, children, ...rest }) => {
  return (
    <RouterLink to={to} className={`${className || ""}`} {...rest}>
      {children}
    </RouterLink>
  );
};

Link.displayName = "Link";

export { Link };
