import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants";
import { fetchAPI, submitAPI } from "@/services";

export const useBooking = () => {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const times = await fetchAPI(new Date());
        setAvailableTimes(times);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };
    fetchTimes();
  }, []);

  const handleSubmitForm = (formData: FormData): void => {
    if (submitAPI(formData)) {
      navigate(ROUTES.BOOKING_CONFIRMED);
    }
  };

  return {
    availableTimes,
    onSubmit: handleSubmitForm
  };
};
