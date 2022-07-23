import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import Filter from "../components/Filter";

test("displays the toggle button", () => {
  render(<Header />);
  expect(screen.queryByText(/ Mode/)).toBeInTheDocument();
} );
test( 'displays Header ', () =>
{
  render( <Filter /> );
})

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);

  fireEvent.click(screen.queryByText(/ Mode/));
  expect(onDarkModeClick).toHaveBeenCalled();
} );

