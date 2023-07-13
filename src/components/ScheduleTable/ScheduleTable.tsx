import { useContext, useMemo } from "react";
import useScheduleLogs from "../../hooks/useScheduleLogs";
import Styles from "./ScheduleTable.module.scss";
import AppContext from "../../context/AppContext";
import { ScheduleLog, ScheduleStatus } from "../../models/Schedule";
import { COLORS } from "../../shared/contants";

const ScheduleTable = () => {
  const { scheduleId } = useContext(AppContext);

  const scheduleLogs = useScheduleLogs();

  const filteredScheduleLogs = useMemo<ScheduleLog[]>(
    (): ScheduleLog[] =>
      scheduleLogs.filter(
        (scheduleLog) => scheduleLog.scheduleId === scheduleId
      ) || [],
    [scheduleLogs, scheduleId]
  );

  const coloredStatus = (status: ScheduleStatus) =>
    ({
      Exception: COLORS.Gray,
      Terminated: COLORS.Red,
      Pending: COLORS.Yellow,
      Completed: COLORS.Green,
      Running: COLORS.Blue,
    }[status]);

  return (
    <div className={Styles.ScheduleTableContainer}>
      {scheduleId && filteredScheduleLogs.length ? (
        <table className={Styles.ScheduleTable}>
          <thead className={Styles.ScheduleTableHeader}>
            <tr className={Styles.ScheduleTableRow}>
              <th className={Styles.ScheduleTableHeaderTitle}>Server Name</th>
              <th className={Styles.ScheduleTableHeaderTitle}>Status</th>
              <th className={Styles.ScheduleTableHeaderTitle}>Start Time</th>
              <th className={Styles.ScheduleTableHeaderTitle}>End Time</th>
            </tr>
          </thead>
          <tbody className={Styles.ScheduleTableBody}>
            {filteredScheduleLogs.map((schedule) => (
              <tr className={Styles.ScheduleTableRow} key={schedule.id}>
                <td className={Styles.ScheduleTableBodyItem}>
                  {schedule.serverName}
                </td>
                <td className={Styles.ScheduleTableBodyItem}>
                  <div
                    className={Styles.ScheduleTableBodyItemStatus}
                    style={{
                      backgroundColor: coloredStatus(schedule.status),
                    }}
                  >
                    {schedule.status}
                  </div>
                </td>
                <td className={Styles.ScheduleTableBodyItem}>
                  {schedule.startTime}
                </td>
                <td className={Styles.ScheduleTableBodyItem}>
                  {schedule.endTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={Styles.ScheduleTableNoScheduleSelected}>
          <h1 className={Styles.ScheduleTableNoScheduleSelectedHeading}>
            {scheduleId ? "No schedule logs found" : "No schedule selected"}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ScheduleTable;
