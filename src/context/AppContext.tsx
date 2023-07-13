import { Dispatch, SetStateAction, createContext } from "react";
import { Schedule } from "../models/Schedule";

export interface AppContextProps {
  schedules?: Schedule[];
  fetchSchedules?: () => Promise<void>;
  updateSchedules?: (scheduleId: number, isRetired?: boolean) => Promise<void>
  scheduleId?: number;
  setScheduleId?: Dispatch<SetStateAction<number | undefined>>;
}

const AppContext = createContext<AppContextProps>({});

export default AppContext;
