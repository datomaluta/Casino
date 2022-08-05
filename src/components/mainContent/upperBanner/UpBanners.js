import classes from "./UpBanners.module.css";
import kacuna from "../../../assets/kacuna.jpg";

const UpBanners = () => {
  return (
    <div className={classes.banners}>
      <div className={classes.firstBanner}>
        <img src={kacuna} alt="kacuna1" />
      </div>
      <div className={classes.secondBanner}>
        <img src={kacuna} alt="kacuna1" />
      </div>
    </div>
  );
};

export default UpBanners;
