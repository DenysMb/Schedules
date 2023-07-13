import { render } from "@testing-library/react";
import Topbar from "./Topbar";

describe("Topbar", () => {
  it("should render the topbar correctly", () => {
    const { getByText } = render(<Topbar />);

    expect(getByText("Schedules")).toBeInTheDocument();
  });
});
