import { ScheduleLog } from "./Schedule";

export type SortOrder = "asc" | "desc";

export interface SortParam {
  field: keyof ScheduleLog;
  order: SortOrder;
}
