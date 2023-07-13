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
    id: 32448579,
    startTime: "2021-06-01T00:08:40.815Z",
    endTime: "2021-02-07T14:11:54.687Z",
    status: "Terminated",
    serverName: "Duis adipisicing mollit labore et",
    scheduleId: 66965611,
  },
  {
    id: 94613267,
    startTime: "2021-09-09T15:54:49.995Z",
    endTime: "2021-10-24T16:11:15.523Z",
    status: "Running",
    serverName: "Lorem elit",
    scheduleId: 66965611,
  },
  {
    id: 94844497,
    startTime: "2021-02-20T17:07:34.228Z",
    endTime: "2021-07-16T22:19:02.955Z",
    status: "Completed",
    serverName: "ad nulla in laboris",
    scheduleId: 66965611,
  },
  {
    id: 60821237,
    startTime: "2021-01-20T02:36:18.186Z",
    endTime: "2021-03-23T09:43:02.459Z",
    status: "Exception",
    serverName: "enim dolor anim officia exercitation",
    scheduleId: 66965611,
  },
  {
    id: 28627794,
    startTime: "2021-02-25T13:36:27.822Z",
    endTime: "2021-11-08T01:34:14.482Z",
    status: "Pending",
    serverName: "mollit amet proident",
    scheduleId: 66965611,
  },
  {
    id: 73313464,
    startTime: "2021-12-04T19:17:23.493Z",
    endTime: "2021-10-27T03:14:48.791Z",
    status: "Completed",
    serverName: "proident dolor occaecat laborum",
    scheduleId: 66965611,
  },
  {
    id: 52258901,
    startTime: "2021-04-23T04:50:04.649Z",
    endTime: "2021-03-18T20:50:43.429Z",
    status: "Terminated",
    serverName: "sint",
    scheduleId: 66965611,
  },
  {
    id: 44897775,
    startTime: "2021-05-06T11:44:02.727Z",
    endTime: "2021-08-07T06:39:53.234Z",
    status: "Pending",
    serverName: "sunt culpa nostrud ullamco laboris",
    scheduleId: 66965611,
  },
  {
    id: 77009665,
    startTime: "2021-08-27T01:20:20.809Z",
    endTime: "2021-01-07T06:12:50.619Z",
    status: "Pending",
    serverName: "ut adipisicing sit velit",
    scheduleId: 66965611,
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
