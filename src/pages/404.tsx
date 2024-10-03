import React from "react";

import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants";

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to={ROUTES.HOME}>Go back to homepage</Link>
    </div>
  );
};

export default NotFoundPage;
