import Image from "next/image.js";
import styles from "./ServiceBanner.module.scss";
const ServiceBanner = () => {
  return (
    <div className={styles.BannerCtn}>
      <div className={styles.BannerContentContainer}>
        <div className={styles.ServiceContent}>
          <h1>Expert Fish Tank & Pond Cleaning Maintenance Services</h1>
          <p>
            Whether you require aquarium or pond cleaning, maintenance, new
            setups, equipment installations, modifications, or aquarium
            relocation of any size, Aquatic Swan Design is here to assist you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
