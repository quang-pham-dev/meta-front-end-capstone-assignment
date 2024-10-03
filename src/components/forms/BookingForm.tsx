import React, { useState, FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { ChooseDateInput } from "@/components/ChooseDateInput";
import { NumberOfGuestsInput } from "@/components/NumberOfGuestInput";

interface BookingFormProps {
  availableTimes: string[];
  onSubmit: (formData: FormData) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  onSubmit
}) => {
  const [formState, setFormState] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <ChooseDateInput
            id="book-date"
            name="date"
            value={formState.date}
            onChange={handleInputChange}
            required
            aria-label="Choose date"
          />

          <Dropdown
            id="book-time"
            name="time"
            value={formState.time}
            onChange={handleInputChange}
            required
            options={availableTimes.map((time) => ({
              value: time,
              label: time
            }))}
            label="Choose Time:"
            aria-label="Choose time"
          />

          <NumberOfGuestsInput
            id="book-guests"
            name="guests"
            value={formState.guests}
            onChange={handleInputChange}
            required
            aria-label="Number of guests"
          />

          <Dropdown
            id="book-occasion"
            name="occasion"
            value={formState.occasion}
            onChange={handleInputChange}
            required
            options={[
              { value: "Birthday", label: "Birthday" },
              { value: "Anniversary", label: "Anniversary" }
            ]}
            label="Occasion:"
            aria-label="Choose occasion"
          />

          <Button
            type="submit"
            className="button-receive"
            aria-label="Make Your Reservation"
          >
            Make Your Reservation
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
