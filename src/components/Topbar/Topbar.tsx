import Styles from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <div className={Styles.TopbarContainer}>
      <h1 className={Styles.TopbarHeading}>Schedules</h1>
    </div>
  );
};

export default Topbar;
