import { BookingForm } from "@/components/forms";

import { useBooking } from "@/hooks/useBooking";

const BookingPage = () => {
  const { availableTimes, onSubmit } = useBooking();

  return <BookingForm availableTimes={availableTimes} onSubmit={onSubmit} />;
};

export default BookingPage;
