import "@testing-library/jest-dom";
import AppContext, { AppContextProps } from "./context/AppContext";

export const mockSchedules = [
  {
    id: 66965611,
    name: "Random Schedule Name (0.5278655729476134)",
    description: "in culpa Ut ea eiusmod",
    isRetired: true,
    tasksCount: 3,
    startPoint: "2021-08-15T18:55:53.107Z",
    endPoint: "2021-09-12T17:15:30.044Z",
    dayOfWeek: 5,
    dayOfMonth: 4,
    startDate: "2021-01-15T01:58:47.388Z",
    endDate: "2021-10-30T20:58:45.997Z",
  },
  {
    id: 61351833,
    name: "Random Schedule Name (0.7274744629491068)",
    description: "laborum fugiat ad et",
    isRetired: false,
    tasksCount: 5,
    startPoint: "2021-11-07T03:31:48.169Z",
    endPoint: "2021-10-30T16:12:45.216Z",
    dayOfWeek: 1,
    dayOfMonth: 26,
    startDate: "2021-06-24T12:25:03.990Z",
    endDate: "2021-09-30T02:24:16.806Z",
    timePeriod: 6,
    intervalType: "Second",
  },
  {
    id: 4305828,
    name: "Random Schedule Name (0.9784316291091399)",
    description: "ea",
    isRetired: false,
    tasksCount: 10,
    startPoint: "2021-01-20T06:14:32.018Z",
    endPoint: "2021-07-31T12:55:30.733Z",
    dayOfWeek: 4,
    dayOfMonth: 16,
    startDate: "2021-07-08T02:07:27.859Z",
    endDate: "2021-12-06T10:03:07.814Z",
    timePeriod: 12,
    intervalType: "Year",
  },
];

export const mockScheduleLogs = [
  {
    id: 60821237,
    startTime: "2021-01-20T02:36:18.186Z",
    endTime: "2021-03-23T09:43:02.459Z",
    status: "Exception",
    serverName: "enim dolor anim officia exercitation",
    scheduleId: 66965611,
  },
  {
    id: 36499088,
    startTime: "2021-03-09T05:42:13.295Z",
    endTime: "2021-07-01T04:26:58.468Z",
    status: "Terminated",
    serverName: "nostrud irure ullamco consectetur in",
    scheduleId: 66965611,
  },
  {
    id: 80832417,
    startTime: "2021-12-08T23:10:52.790Z",
    endTime: "2021-03-06T01:49:05.125Z",
    status: "Pending",
    serverName: "in ex Lorem sit",
    scheduleId: 61351833,
  },
];

export const mockContextValues: AppContextProps = {
  scheduleId: mockSchedules[0].id,
  setScheduleId: jest.fn(),
  schedules: mockSchedules,
  fetchSchedules: jest.fn(),
  updateSchedules: jest.fn(),
};

export const WrapperWithContext = ({
  value = {},
  children,
}: {
  value?: Partial<AppContextProps>;
  children: React.ReactNode;
}) => (
  <AppContext.Provider value={{ ...mockContextValues, ...value }}>
    {children}
  </AppContext.Provider>
);
