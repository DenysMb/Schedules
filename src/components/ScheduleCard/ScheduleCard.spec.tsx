import { render, fireEvent, waitFor } from "@testing-library/react";
import ScheduleCard from "./ScheduleCard";
import { WrapperWithContext, mockSchedules } from "../../setupTests";

describe("ScheduleCard", () => {
  const wrapper = (
    <WrapperWithContext>
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

  it("should call setScheduleId when schedule card is clicked", () => {
    const mockSetScheduleId = jest.fn();

    const { getByText } = render(wrapper);

    const cardTitle = getByText(mockSchedules[0].name);

    fireEvent.click(cardTitle);

    waitFor(() => {
      expect(mockSetScheduleId).toHaveBeenCalledWith(1);
    });
  });

  it("should call updateSchedules with the correct parameters when retire/unretire button is clicked", () => {
    const mockUpdateSchedules = jest.fn();

    const { getByText } = render(wrapper);

    const retireButton = getByText("Unretire");

    fireEvent.click(retireButton);

    waitFor(() => {
      expect(mockUpdateSchedules).toHaveBeenCalledWith(1, true);
    });
  });
});
