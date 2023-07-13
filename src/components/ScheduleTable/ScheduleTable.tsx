import { useContext, useMemo, useState } from "react";
import useScheduleLogs from "../../hooks/useScheduleLogs";
import Styles from "./ScheduleTable.module.scss";
import AppContext from "../../context/AppContext";
import { ScheduleLog, ScheduleStatus } from "../../models/Schedule";
import { COLORS } from "../../shared/contants";
import { SortParam } from "../../models/Sort";

const ScheduleTable = () => {
  const [sort, setSort] = useState<SortParam>({
    field: "serverName",
    order: "asc",
  });

  const { scheduleId } = useContext(AppContext);

  const scheduleLogs = useScheduleLogs();

  const setSortField = (field: keyof ScheduleLog) => {
    const order =
      sort.field === field ? (sort.order === "asc" ? "desc" : "asc") : "asc";

    setSort({ field, order });
  };

  const filteredAndSortedScheduleLogs = useMemo<ScheduleLog[]>(
    (): ScheduleLog[] =>
      scheduleLogs
        .filter((scheduleLog) => scheduleLog.scheduleId === scheduleId)
        .sort((a, b) => {
          const { order, field } = sort;

          const aValue =
            typeof a[field] === "string"
              ? (a[field] as string).toLowerCase()
              : a[field];

          const bValue =
            typeof b[field] === "string"
              ? (b[field] as string).toLowerCase()
              : b[field];

          switch (order) {
            case "asc":
              return aValue > bValue ? 1 : -1;
            case "desc":
              return bValue > aValue ? 1 : -1;
            default:
              return 0;
          }
        }) || [],
    [sort, scheduleLogs, scheduleId]
  );

  const coloredStatus = (status: ScheduleStatus) =>
    ({
      Exception: COLORS.Gray,
      Terminated: COLORS.Red,
      Pending: COLORS.Yellow,
      Completed: COLORS.Green,
      Running: COLORS.Blue,
    }[status]);

  const SortArrow = ({ field }: { field: keyof ScheduleLog }) => {
    return (
      sort.field === field && <span> {sort.order === "asc" ? "↑" : "↓"}</span>
    );
  };

  return (
    <div className={Styles.ScheduleTableContainer}>
      {scheduleId && filteredAndSortedScheduleLogs.length ? (
        <table className={Styles.ScheduleTable}>
          <thead className={Styles.ScheduleTableHeader}>
            <tr className={Styles.ScheduleTableRow}>
              <th
                className={Styles.ScheduleTableHeaderTitle}
                onClick={() => setSortField("serverName")}
              >
                Server Name
                <SortArrow field={"serverName"} />
              </th>
              <th
                className={Styles.ScheduleTableHeaderTitle}
                onClick={() => setSortField("status")}
              >
                Status
                <SortArrow field={"status"} />
              </th>
              <th
                className={Styles.ScheduleTableHeaderTitle}
                onClick={() => setSortField("startTime")}
              >
                Start Time
                <SortArrow field={"startTime"} />
              </th>
              <th
                className={Styles.ScheduleTableHeaderTitle}
                onClick={() => setSortField("endTime")}
              >
                End Time
                <SortArrow field={"endTime"} />
              </th>
            </tr>
          </thead>
          <tbody className={Styles.ScheduleTableBody}>
            {filteredAndSortedScheduleLogs.map((schedule) => (
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
