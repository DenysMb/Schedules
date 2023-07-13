import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScheduleCard from "./ScheduleCard";
import { WrapperWithContext, mockSchedules } from "../../setupTests";

describe("ScheduleCard", () => {
  const updateSchedules = jest.fn();
  const setScheduleId = jest.fn();

  const wrapper = (
    <WrapperWithContext value={{ updateSchedules, setScheduleId }}>
      <ScheduleCard schedule={mockSchedules[0]} />
    </WrapperWithContext>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render schedule details correctly", () => {
    const { getByText, getByTitle } = render(wrapper);

    expect(getByText(mockSchedules[0].name)).toBeInTheDocument();
    expect(getByTitle(mockSchedules[0].description)).toBeInTheDocument();
    expect(getByText(mockSchedules[0].tasksCount)).toBeInTheDocument();
  });

  it("should call selectSchedule when schedule card is clicked", async () => {
    const { getByText } = render(wrapper);

    const cardTitle = getByText(mockSchedules[0].name);

    await userEvent.click(cardTitle);

    expect(setScheduleId).toHaveBeenCalledWith(mockSchedules[0].id);
  });

  it("should call retireOrUnretireSchedule with the correct parameters when retire/unretire button is clicked", async () => {
    const { getByText } = render(wrapper);

    const retireButton = getByText("Unretire");

    await userEvent.click(retireButton);

    expect(updateSchedules).toHaveBeenCalledWith(
      mockSchedules[0].id,
      !mockSchedules[0].isRetired
    );
  });
});
