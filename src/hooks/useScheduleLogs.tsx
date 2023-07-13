import { useEffect, useState } from "react";
import { ScheduleLog } from "../models/Schedule";
import { ENDPOINTS } from "../api/endpoints";
import axios from "axios";

const useScheduleLogs = (): ScheduleLog[] => {
  const [scheduleLogs, setScheduleLogs] = useState<ScheduleLog[]>([]);

  useEffect(() => {
    const fetchScheduleLogs = async () => {
      try {
        const { data } = await axios.get<ScheduleLog[]>(ENDPOINTS.ScheduleLogs);

        setScheduleLogs(data);
      } catch (error) {
        console.error("Error fetching schedule logs:", error);
      }
    };

    void fetchScheduleLogs();
  }, []);

  return scheduleLogs;
};

export default useScheduleLogs;
