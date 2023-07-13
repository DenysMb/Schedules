import { useContext, useMemo } from "react";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard";
import ScheduleTable from "../../components/ScheduleTable/ScheduleTable";
import Styles from "./SchedulesPage.module.scss";
import AppContext from "../../context/AppContext";

const SchedulesList = () => {
  const { schedules } = useContext(AppContext);

  const sortedSchedules = useMemo(
    () => schedules?.sort((schedule) => (schedule.isRetired ? 1 : -1)),
    [schedules]
  );

  return (
    <div className={Styles.SchedulesList}>
      {sortedSchedules?.map((schedule) => (
        <ScheduleCard
          key={`${schedule.id}${schedule.isRetired.toString()}`}
          schedule={schedule}
        />
      ))}
    </div>
  );
};

const SchedulesPage = () => {
  return (
    <div className={Styles.SchedulesPageContainer}>
      <SchedulesList />
      <ScheduleTable />
    </div>
  );
};

export default SchedulesPage;
