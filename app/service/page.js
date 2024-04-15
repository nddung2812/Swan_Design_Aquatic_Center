'use-client'
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import ServiceBanner from "./serviceComponents/banner"
import styles from './service.module.scss'
import { Metadata } from 'next';

export const metadata = {
  title: 'Service | Professional Fish Tank Cleaning, Pond & Maintenance Brisbane',
  description: 'Professional Fish Tank Cleaning, We provide complete Aquarium Pond and fish tank Maintenance. Create or maintain your aquarium or pond.',
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
