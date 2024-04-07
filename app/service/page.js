import dynamic from 'next/dynamic'
import Footer from '../components/Footer';

import './service.css'

const NavbarWithNoSSR = dynamic(
    () => import('../components/Navbar'),
    { ssr: false }
  )

export default function Service() {
    return (
        <div className='service-ctn' >
        <NavbarWithNoSSR />
        <main>
            Service
        </main>
        <Footer />
        </div>
    );
  }
  