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

describe("stylings on hover, dates in grey", () => {
  it("renders hover color in grey", () => {
    render(<Page />);
    const dateButtons = screen.getByText("＜");
    expect(dateButtons).toHaveClass("hover:bg-gray-200");
  });
  it("renders not current month dates text in grey ", () => {
    const { container } = render(<Page />);
    const elements = container.querySelectorAll(".cursor-not-allowed");
    elements.forEach((element) => {
      fireEvent.click(element);
      expect(element).toBeInTheDocument();
    });
  });
});

describe("button functionalities", () => {
  it("set first click date as the starting date", async () => {
    const { container } = render(<Page />);
    const elements = container.querySelectorAll(".testID");

    for (let element of elements) {
      fireEvent.click(element);
      const updatedStartDateBtn = container.querySelector(".bg-blue-600");
      expect(updatedStartDateBtn).toBeInTheDocument();
    }
  });

  it("Next click date is same as current select option", () => {
    const { container } = render(<Page />);
    const elements = container.querySelectorAll(".testId");
    for (let element of elements) {
      fireEvent.click(element);
      const currentBtn = container.querySelector(".bg-blue-600");
      const newComingBtn = currentBtn;
      expect(newComingBtn).toBeInTheDocument();
    }
  });
  // });

  //another way to get value using dynamic test-id yeah i just reminded that
  it("Next click date is earlier than current option will reset start date value.", async () => {
    render(<Page />);
    fireEvent.click(await screen.findByTestId("16"));
    fireEvent.click(await screen.findByTestId("15"));
    const currentBtnDiv = (await screen.findByTestId("16")).parentElement;
    console.log({ currentBtnDiv });
    const nextBtnDiv = (await screen.findByTestId("15")).parentElement;
    console.log({ nextBtnDiv });
    expect(nextBtnDiv).toHaveClass("bg-blue-600");
    expect(currentBtnDiv).toHaveClass("hover:bg-gray-200");
  });
});
