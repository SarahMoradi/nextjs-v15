import {Meta, StoryObj} from '@storybook/react'
import {Button} from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'], //define automatic
}

export default meta

type Story = StoryObj<typeof Button>
export const BrandColors: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button variant='neutral'>Neutral</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='accent'>Accent</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isLink={true}>Link</Button>
    </>
  ),
}
