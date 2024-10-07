import type { Meta, StoryObj } from "@storybook/react";
import { ChooseDateInput } from "./index";

const meta: Meta<typeof ChooseDateInput> = {
  title: "Components/ChooseDateInput",
  component: ChooseDateInput,
  argTypes: {
    label: { control: "text" },
    labelClassName: { control: "text" },
    wrapperClassName: { control: "text" },
    className: { control: "text" },
    id: { control: "text" },
    placeholder: { control: "text" },
    onChange: { action: "changed" }
  }
};

export default meta;
type Story = StoryObj<typeof ChooseDateInput>;

export const Default: Story = {
  args: {
    label: "Choose Date:",
    id: "default-date-input"
  }
};

export const CustomLabel: Story = {
  args: {
    label: "Select a Date:",
    id: "custom-label-date-input"
  }
};

export const WithPlaceholder: Story = {
  args: {
    label: "Event Date:",
    placeholder: "YYYY-MM-DD",
    id: "placeholder-date-input"
  }
};

export const CustomClasses: Story = {
  args: {
    label: "Appointment Date:",
    labelClassName: "custom-label",
    wrapperClassName: "custom-wrapper",
    className: "custom-input",
    id: "custom-classes-date-input"
  }
};

export const WithoutLabel: Story = {
  args: {
    label: "",
    id: "no-label-date-input"
  }
};
