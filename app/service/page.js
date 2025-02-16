"use-client";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import ServiceBanner from "./serviceComponents/banner";
import styles from "./service.module.scss";
import { runtime } from "../page.js";

export const metadata = {
  title:
    "Service | Professional Fish Tank Cleaning, Pond & Maintenance in Brisbane area",
  description:
    "Professional Fish Tank Cleaning, We are located in Brisbane and provide complete aquarium pond and fish tank setup or maintenance.  We look after your aquarium or pond.",
};
const NavbarWithNoSSR = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

export default function Service() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.serviceCtn}>
          <NavbarWithNoSSR />
          <ServiceBanner />
          <Footer />
        </div>
      </main>
    </>
  );
}
