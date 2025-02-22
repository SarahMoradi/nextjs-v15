import { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

import results from '../../../../.jest-test-results.json';

import { withTests } from '@storybook/addon-jest';

const meta: Meta<typeof Badge> = {
    component: Badge,
    tags: ["autodocs"],
    args: {
        variant: 'accent'
    }
};

export default meta;

type Story = StoryObj<typeof Badge>;
export const Tests: Story = {
    render: (args) => (<Badge {...args}>content</Badge>)
 };
 Tests.decorators = [ withTests({results})]
export const BrandColors: Story = {
    render: () => (
        <>
            <Badge>Default</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="ghost">Ghost</Badge>
        </>
    ),
};

export const StateColors: Story = {
    render: () => (
        <>
            <Badge variant="success">Success</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
        </>
    ),
};


export const BadgeSizes: Story = {
    render: () => (
        <>
            <Badge variant="accent" size="tiny">
                Tiny
            </Badge>
            <Badge variant="accent" size="small">
                Small
            </Badge>
            <Badge variant="accent" size="normal">
                Normal
            </Badge>
            <Badge variant="accent" size="large">
                Large
            </Badge>
        </>
    ),
};