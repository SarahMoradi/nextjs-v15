import { describe } from "node:test";
import { Button } from "./button";
import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
    test("renders a default button", () => {
        const { getByText } = render(<Button>click here</Button>);
        expect(getByText("click here")).toBeInTheDocument();
    });

    test("disables the button when isDisabled prop is true", () => {
        render(<Button isDisabled>click here</Button>);
        expect(screen.getByText("click here")).toBeDisabled();
    });

    test("applies the correct css class for different button variants", () => {
        const { rerender } = render(
            <Button variant="primary">click here</Button>
        );
        expect(screen.getByRole("button")).toHaveClass(`btn-primary`);

        rerender(<Button variant="info">click here</Button>);
        expect(screen.getByRole("button")).toHaveClass(`btn-info`);
    });

    test("applies the correct css class for different button sizes", () => {
        const { rerender } = render(
            <Button size="small">click here</Button>
        );
        expect(screen.getByRole("button")).toHaveClass(`btn-sm`);

        rerender(<Button size="large">click here</Button>);
        expect(screen.getByRole("button")).toHaveClass(`btn-lg`);
    });

    test('show rendered button', () => {
        render(<Button variant="primary" isOutline={true} size="large" isDisabled={true}>Click here</Button> )
        screen.debug();
    })
});