import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  argTypes: {
    options: { control: "object" },
    label: { control: "text" },
    wrapperClassName: { control: "text" },
    labelClassName: { control: "text" },
    className: { control: "text" },
    id: { control: "text" },
    onChange: { action: "changed" }
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    label: "Select an option",
    id: "default-dropdown"
  }
};

export const WithoutLabel: Story = {
  args: {
    options: defaultOptions,
    id: "no-label-dropdown"
  }
};

export const CustomClasses: Story = {
  args: {
    options: defaultOptions,
    label: "Custom Classes Dropdown",
    wrapperClassName: "custom-wrapper",
    labelClassName: "custom-label",
    className: "custom-select",
    id: "custom-classes-dropdown"
  }
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    label: "Disabled Dropdown",
    id: "disabled-dropdown",
    disabled: true
  }
};

export const ManyOptions: Story = {
  args: {
    options: [
      ...defaultOptions,
      { value: "option4", label: "Option 4" },
      { value: "option5", label: "Option 5" },
      { value: "option6", label: "Option 6" },
      { value: "option7", label: "Option 7" },
      { value: "option8", label: "Option 8" }
    ],
    label: "Many Options Dropdown",
    id: "many-options-dropdown"
  }
};
