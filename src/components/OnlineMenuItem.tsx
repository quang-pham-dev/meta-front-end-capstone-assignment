import React, { useCallback } from "react";

import { Recipe } from "@/types";
import { Button } from "@/components/ui/Button";

interface OnlineMenuItemProps {
  recipe: Recipe;
  onOrder: (recipe: Recipe) => void;
  isProcessing: boolean;
}

const OnlineMenuItem: React.FC<OnlineMenuItemProps> = ({
  recipe,
  onOrder,
  isProcessing
}) => {
  const { image, title, price, description } = recipe || {};

  const handleOrderNow = useCallback(() => {
    onOrder?.(recipe);
  }, [onOrder, recipe]);

  return (
    <div className="menu-items">
      <img src={image} alt={title} />
      <div className="menu-content">
        <div className="heading">
          <h3>{title}</h3>
          <span className="price">${price.toFixed(2)}</span>
        </div>
        <p>{description}</p>

        <Button
          className="order-button"
          disabled={isProcessing}
          onClick={handleOrderNow}
        >
          {isProcessing ? "Processing..." : "Order Now"}
        </Button>
      </div>
    </div>
  );
};

export default OnlineMenuItem;
