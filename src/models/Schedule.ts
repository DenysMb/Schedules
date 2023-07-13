export type ScheduleStatus = "Exception" | "Terminated" | "Pending" | "Completed" | "Running";

export interface Schedule {
  id: number;
  name: string;
  description: string;
  isRetired: boolean;
  tasksCount: number;
  startPoint: string;
  endPoint: string;
  dayOfWeek: number;
  dayOfMonth: number;
  startDate: string;
  endDate: string;
}

export interface ScheduleLog {
  "id": number,
  "scheduleId": number
  "startTime": string,
  "endTime": string,
  "status": ScheduleStatus,
  "serverName": string,
}
