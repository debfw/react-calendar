import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "../page";

describe("should have buttons and title", () => {
  it("renders a dateButton,selectButton", () => {
    render(<Page />);

    const dateButtons = screen.getAllByRole("button");
    const selectButtonRight = screen.getByText("＜");
    const selectButtonLeft = screen.getByText("＞");

    dateButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    expect(selectButtonRight).toBeInTheDocument();
    expect(selectButtonLeft).toBeInTheDocument();
  });
  it("renders a monthTitle", () => {
    render(<Page />);

    const monthTitle = screen.getByText("2022年7月");

    expect(monthTitle).toBeInTheDocument();
  });
});

describe("stylings on hover, blue/yellow background, dates in grey", () => {
  it("renders hover color in grey", () => {
    render(<Page />);

    const dateButtons = screen.getByText("＜");
    expect(dateButtons).toHaveClass("hover:bg-gray-200");
  });
  it("renders not current month dates text in grey ", () => {
    const { container } = render(<Page />);
    const elements = container.querySelectorAll('.cursor-not-allowed');
      elements.forEach((element)=>{
        fireEvent.click(element)
        expect(element).toBeInTheDocument()
      })
     
  });
});
