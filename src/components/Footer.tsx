import { Link } from "@/components/ui/Link";
import { NAVIGATION, ROUTES } from "@/constants/routes";
import logo from "@/assets/images/logo.svg";

const { HOME } = ROUTES;

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="company-image" />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist{" "}
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            {NAVIGATION.map(({ id, name, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  className={location.pathname === path ? "active" : ""}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact us</h3>
          <ul>
            <li>
              Address : <br /> 1234 Main St, Anytown, USA
            </li>
            <li>
              Phone : <br /> +000000000
            </li>
            <li>
              Email : <br /> quangpn.developer@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3>Social Links</h3>
          <ul>
            <li>
              <Link to={HOME}>Facebook</Link>
            </li>
            <li>
              <Link to={HOME}>Instagram</Link>
            </li>
            <li>
              <Link to={HOME}>Twitter</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
