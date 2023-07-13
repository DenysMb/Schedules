import { useContext } from "react";
import { Schedule } from "../../models/Schedule";
import Styles from "./ScheduleCard.module.scss";
import AppContext from "../../context/AppContext";
import { COLORS } from "../../shared/contants";

interface ScheduleCardProps {
  schedule: Schedule;
}

const ScheduleCard = ({ schedule }: ScheduleCardProps) => {
  const { setScheduleId, updateSchedules } = useContext(AppContext);

  const { id, name, description, tasksCount, isRetired } = schedule;

  const selectSchedule = () => {
    setScheduleId && setScheduleId(id);
  };

  const retireOrUnretireSchedule = () => {
    updateSchedules && void updateSchedules(id, !isRetired);
  };

  const retireOrUnretireButtonColor = isRetired ? COLORS.Green : COLORS.Red;

  return (
    <div className={Styles.ScheduleCardContainer} onClick={selectSchedule}>
      <div className={Styles.ScheduleCardHeader}>
        <div className={Styles.ScheduleCardHeaderTaskCount}>{tasksCount}</div>

        <div className={Styles.ScheduleCardHeaderTitle} title={name}>
          {name}
        </div>
      </div>

      <div className={Styles.ScheduleCardBody} title={description}>
        {description}
      </div>

      <div className={Styles.ScheduleCardActions}>
        <button
          className={Styles.ScheduleCardActionsButton}
          onClick={retireOrUnretireSchedule}
          style={{ backgroundColor: retireOrUnretireButtonColor }}
        >
          {isRetired ? "Unretire" : "Retire"}
        </button>
      </div>
    </div>
  );
};

export default ScheduleCard;
