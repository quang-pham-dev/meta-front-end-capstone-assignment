import type { Meta, StoryObj } from "@storybook/react";
import { NumberOfGuestsInput } from "./index";

const meta: Meta<typeof NumberOfGuestsInput> = {
  title: "Components/NumberOfGuestsInput",
  component: NumberOfGuestsInput,
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
type Story = StoryObj<typeof NumberOfGuestsInput>;

export const Default: Story = {
  args: {
    label: "Number of guests:",
    id: "default-guests-input"
  }
};

export const CustomLabel: Story = {
  args: {
    label: "Party Size:",
    id: "custom-label-guests-input"
  }
};

export const WithPlaceholder: Story = {
  args: {
    label: "Group Size:",
    placeholder: "Enter number of guests",
    id: "placeholder-guests-input"
  }
};

export const CustomClasses: Story = {
  args: {
    label: "Attendees:",
    labelClassName: "custom-label",
    wrapperClassName: "custom-wrapper",
    className: "custom-input",
    id: "custom-classes-guests-input"
  }
};

export const WithoutLabel: Story = {
  args: {
    label: "",
    id: "no-label-guests-input"
  }
};
