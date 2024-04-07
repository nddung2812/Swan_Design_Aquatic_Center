'use client'
import ReactHowler from 'react-howler'
import './page.css';
import Duckweeds from './components/Duckweeds';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';
import { Preloader } from "./components/Preloader.jsx"
import dynamic from 'next/dynamic'

const NavbarWithNoSSR = dynamic(
  () => import('./components/Navbar'),
  { ssr: false }
)

const WaterWaveNoSSr = dynamic(
  () => import('react-water-wave'),
  { ssr: false }
)

const Home = () => {

  return (
    <>
    <Preloader />
    <WaterWaveNoSSr
      dropRadius={60}
      perturbance={0.05}
      interactive={true}
      resolution={512}
    >
      {() => (
        <div className="home-page-container">
          <video 
            autoPlay="autoplay" 
            muted
            defaultMuted
            playsInline 
            loop="loop"
            preload="auto"
            >
            <source src="https://znjf1ip6migqhqsx.public.blob.vercel-storage.com/Koifish-yTANtUJgMxz90jG7i5JvODHDj2RVQO.mp4" type="video/mp4" />
          </video>
          <ReactHowler src="https://znjf1ip6migqhqsx.public.blob.vercel-storage.com/BlueDream-3zIGmjQ2jnpCR09dSO0k2olRfYnEEO.mp3" playing={true} volume={0.5} loop={true}/>
          <Duckweeds />
          <NavbarWithNoSSR />
          <HomeBanner />
          <Footer />
        </div>
      )}
    </WaterWaveNoSSr>
    </>
  );
}

export default Home