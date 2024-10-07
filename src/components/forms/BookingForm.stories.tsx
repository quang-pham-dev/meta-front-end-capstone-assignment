import type { Meta, StoryObj } from "@storybook/react";
import BookingForm from "./BookingForm";

const meta: Meta<typeof BookingForm> = {
  title: "Components/BookingForm",
  component: BookingForm,
  argTypes: {
    availableTimes: { control: "array" as unknown as undefined },
    onSubmit: { action: "submitted" }
  }
};

export default meta;
type Story = StoryObj<typeof BookingForm>;

export const Default: Story = {
  args: {
    availableTimes: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
  }
};

export const WithLimitedTimes: Story = {
  args: {
    availableTimes: ["18:00", "19:00", "20:00"]
  }
};

export const WithNoAvailableTimes: Story = {
  args: {
    availableTimes: []
  }
};

export const WithCustomSubmitHandler: Story = {
  args: {
    availableTimes: ["12:00", "13:00", "14:00"],
    onSubmit: (formData: FormData) => {
      console.log("Custom submit handler", Object.fromEntries(formData));
    }
  }
};
