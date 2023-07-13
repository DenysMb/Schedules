import { useCallback, useEffect, useState } from "react";
import Styles from "./App.module.scss";
import AppContext from "./context/AppContext";
import SchedulesPage from "./features/SchedulesPage/SchedulesPage";
import { Schedule } from "./models/Schedule";
import { ENDPOINTS } from "./api/endpoints";
import axios from "axios";
import Topbar from "./components/Topbar/Topbar";

const logError = (error: unknown) => {
  console.error("An error occurred:", error);
};

function App() {
  const [scheduleId, setScheduleId] = useState<number | undefined>();

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const fetchSchedules = useCallback(async () => {
    try {
      const { data } = await axios.get<Schedule[]>(ENDPOINTS.Schedules);

      setSchedules(data);
    } catch (error) {
      logError(error);
    }
  }, []);

  const updateSchedules = useCallback(
    async (scheduleId: number, isRetired?: boolean) => {
      try {
        await axios.patch(`${ENDPOINTS.Schedules}/${scheduleId}`, {
          isRetired,
        });

        await fetchSchedules();
      } catch (error) {
        logError(error);
      }
    },
    [fetchSchedules]
  );

  useEffect(() => {
    void fetchSchedules();
  }, []);

  const AppContextValues = {
    scheduleId,
    setScheduleId,
    schedules,
    fetchSchedules,
    updateSchedules,
  };

  return (
    <AppContext.Provider value={AppContextValues}>
      <div className={Styles.AppContainer}>
        <Topbar />
        <SchedulesPage />
      </div>
    </AppContext.Provider>
  );
}

export default App;
