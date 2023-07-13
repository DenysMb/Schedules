import { render, waitFor } from "@testing-library/react";
import ScheduleTable from "./ScheduleTable";
import { WrapperWithContext, mockScheduleLogs } from "../../setupTests";

describe("ScheduleTable", () => {
  const wrapper = (
    <WrapperWithContext>
      <ScheduleTable />
    </WrapperWithContext>
  );

  const wrapperWithoutScheduleId = (
    <WrapperWithContext value={{ scheduleId: undefined }}>
      <ScheduleTable />
    </WrapperWithContext>
  );

  const mockUseScheduleLogs = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render table with schedule logs when scheduleId and filteredScheduleLogs exist", () => {
    mockUseScheduleLogs.mockReturnValue(mockScheduleLogs);

    const { getByText } = render(wrapper);

    waitFor(() => {
      expect(getByText(mockScheduleLogs[0].serverName)).toBeInTheDocument();
      expect(getByText(mockScheduleLogs[0].status)).toBeInTheDocument();
      expect(getByText(mockScheduleLogs[0].startTime)).toBeInTheDocument();
      expect(getByText(mockScheduleLogs[0].endTime)).toBeInTheDocument();
      expect(getByText(mockScheduleLogs[1].serverName)).toBeInTheDocument();
      expect(getByText(mockScheduleLogs[1].status)).toBeInTheDocument();
      expect(getByText(mockScheduleLogs[1].startTime)).toBeInTheDocument();
      expect(getByText(mockScheduleLogs[1].endTime)).toBeInTheDocument();
    });
  });

  it("should render 'No schedule logs found' message when scheduleId exists but filteredScheduleLogs is empty", () => {
    mockUseScheduleLogs.mockReturnValue([]);

    const { getByText } = render(wrapper);

    expect(getByText("No schedule logs found")).toBeInTheDocument();
  });

  it("should render 'No schedule selected' message when scheduleId is not set", () => {
    const { getByText } = render(wrapperWithoutScheduleId);

    expect(getByText("No schedule selected")).toBeInTheDocument();
  });
});
