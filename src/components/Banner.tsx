import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants";
import banner from "@/assets/images/restaurant-food.jpg";

const Banner = () => {
  const navigate = useNavigate();
  const handleReserveTable = () => {
    navigate(ROUTES.BOOKING);
  };
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button variant="primary" size="large" onClick={handleReserveTable}>
            Reserve Table
          </Button>
        </div>

        <div className="banner-img">
          <img src={banner} alt="banner-image" />
        </div>
      </section>
    </header>
  );
};

export default Banner;
