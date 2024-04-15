import Image from "next/image.js"
import styles from './ServiceBanner.module.scss'
const ServiceBanner = () => {
  return (
    <div className={styles.BannerCtn}>
      <div className={styles.ServiceContent}>
        <h1>Fish Tank & Pond Cleaning Maintenance Services</h1>
        <p>Whether you need aquarium or pond cleaning and maintenance, a new set-up, modifications and equipment installation, or the relocation of aquariums of any size, Aquarium & Pond Solutions can help you out!</p>
      </div>
    </div>
  )
}

export default ServiceBanner