import { render } from "@testing-library/react";
import SchedulesPage from "./SchedulesPage";
import { WrapperWithContext, mockSchedules } from "../../setupTests";

describe("SchedulesPage", () => {
  const wrapper = (
    <WrapperWithContext>
      <SchedulesPage />
    </WrapperWithContext>
  );

  it("should render schedules list and schedule table", () => {
    const { getByText } = render(wrapper);

    expect(getByText(mockSchedules[0].name)).toBeInTheDocument();
    expect(getByText(mockSchedules[0].description)).toBeInTheDocument();
    expect(getByText(mockSchedules[1].name)).toBeInTheDocument();
    expect(getByText(mockSchedules[1].description)).toBeInTheDocument();
    expect(getByText(mockSchedules[2].name)).toBeInTheDocument();
    expect(getByText(mockSchedules[2].description)).toBeInTheDocument();
  });
});
