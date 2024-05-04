import Image from "next/image.js";
import styles from "./ServiceBanner.module.scss";
import ServiceForm from "./serviceForm.js";
const ServiceBanner = () => {
  return (
    <div className={styles.BannerCtn}>
      <div className={styles.BannerContentContainer}>
        <div className={styles.ServiceContent}>
          <h1> Fish Tank & Pond Cleaning Services in Brisbane Areas</h1>
          <p>
            Whether you require aquarium or pond cleaning, maintenance, new
            setups, equipment installations, modifications, or aquarium
            relocation of any size around Brisbane, Duckaroo is here to assist you!
          </p>
        </div>
      <ServiceForm />
      </div>
    </div>
  );
};

export default ServiceBanner;
