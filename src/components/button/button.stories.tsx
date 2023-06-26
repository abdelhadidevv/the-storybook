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
    theme: {
      control: {
        type: "radio",
      },
      options: ["filled", "outlined", "ghost", "text"],
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["large", "medium", "small", "xsmall"],
    },
    round: {
      control: {
        type: "radio",
      },
      options: ["sm", "lg", "xl", "full"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
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
    size: "large",
  },
};

export const Ghost: Story = {
  args: {
    ...Filled.args,
    theme: "ghost",
    size: "large",
  },
};

export const Text: Story = {
  args: {
    ...Filled.args,
    theme: "text",
    size: "large",
  },
};
