import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../Link";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Link> = {
  title: "UI/Link",
  component: Link,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  argTypes: {
    to: { control: "text" },
    className: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" }
  }
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    to: "/",
    children: "Default Link"
  }
};

export const WithCustomClass: Story = {
  args: {
    to: "/custom",
    className: "custom-link-class",
    children: "Custom Class Link"
  }
};

export const ExternalLink: Story = {
  args: {
    to: "https://example.com",
    children: "External Link"
  }
};

export const WithIcon: Story = {
  args: {
    to: "/icon",
    children: (
      <>
        <span>Icon Link</span>
        <span className="icon">→</span>
      </>
    )
  }
};
