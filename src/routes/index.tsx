import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/layouts";
import { ROUTES } from "@/constants";

const { HOME, BOOKING, BOOKING_CONFIRMED } = ROUTES;

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: HOME,
      element: <MainLayout />,
      children: [
        {
          index: true,
          lazy: async () => {
            const { default: HomePage } = await import("@/pages/Home");
            return { Component: HomePage };
          }
        },
        {
          path: BOOKING,
          lazy: async () => {
            const { default: BookingPage } = await import("@/pages/Booking");
            return { Component: BookingPage };
          }
        },
        {
          path: BOOKING_CONFIRMED,
          lazy: async () => {
            const { default: BookingConfirmedPage } = await import(
              "@/pages/BookingConfirmed"
            );
            return { Component: BookingConfirmedPage };
          }
        },
        {
          path: "*",
          lazy: async () => {
            const { default: NotFoundPage } = await import("../pages/404");
            return { Component: NotFoundPage };
          }
        }
      ]
    }
  ]);

const AppRouter: React.FC = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};

export default AppRouter;
