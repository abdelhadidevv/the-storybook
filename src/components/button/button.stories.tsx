import type { Meta, StoryObj } from "@storybook/react";
import { BiSolidSend } from "react-icons/bi";

import Button from "./index";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    direction: "ltr",
  },
  argTypes: {
    children: {
      description: "Button content",
    },
    theme: {
      control: {
        type: "radio",
      },
      defaultValue: { summary: "filled" },
      description: "Button variant",
      options: ["filled", "outlined", "ghost", "text"],
    },
    size: {
      control: {
        type: "radio",
      },
      defaultValue: { summary: "large" },
      description: "How large should the button be?",
      options: ["large", "medium", "small", "xsmall"],
    },
    round: {
      control: {
        type: "radio",
      },
      defaultValue: { summary: "sm" },
      description: "How rounded should the button be?",
      options: ["sm", "lg", "xl", "full"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: { summary: "false" },
      description: "Disable the button",
    },
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: { summary: "false" },
      description: "Show loading dots animation",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: (
      <>
        Send <BiSolidSend />
      </>
    ),
    theme: "filled",
    size: "small",
    round: "sm",
    disabled: false,
    loading: false,
  },
};

export const Outlined: Story = {
  args: {
    ...Filled.args,
    theme: "outlined",
  },
};

export const Ghost: Story = {
  args: {
    ...Filled.args,
    theme: "ghost",
  },
};

export const Text: Story = {
  args: {
    ...Filled.args,
    theme: "text",
  },
};
