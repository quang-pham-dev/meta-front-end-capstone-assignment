import React, { useState, useCallback } from "react";
import Swal from "sweetalert2";

import OnlineMenuItem from "@/components/OnlineMenuItem";
import { Button } from "@/components/ui/Button";
import { Recipe } from "@/types";
import recipes from "@/data/recipes";

const OnlineMenu: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleOrder = useCallback(async (recipe: Recipe): Promise<void> => {
    setSelectedRecipe(recipe);
    const result = await Swal.fire({
      title: "Confirm Order",
      text: `Are you sure you want to order ${recipe.title} for $${recipe.price}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    });

    if (result.isConfirmed) {
      await Swal.fire(
        "Order Confirmed",
        `Your order for ${recipe.title} has been processed.`,
        "success"
      );
    }

    setSelectedRecipe(null);
  }, []);

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's specials!</h2>
        <Button variant="primary" size="large">
          Order Menu
        </Button>
      </div>

      <div className="cards">
        {recipes.map((recipe: Recipe) => (
          <OnlineMenuItem
            key={recipe.id}
            recipe={recipe}
            onOrder={handleOrder}
            isProcessing={selectedRecipe === recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineMenu;
