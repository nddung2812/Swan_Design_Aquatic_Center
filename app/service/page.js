import dynamic from 'next/dynamic'
import Footer from '../components/Footer';
import Image from 'next/image'
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
            <Image src="https://firebasestorage.googleapis.com/v0/b/aquatic-swan-design.appspot.com/o/oceanBlue.jfif?alt=media&token=578048fa-cd06-4601-9ce5-9763001a79b9" width={500} height={500} alt="ocean" />
        </main>
        <Footer />
        </div>
    );
  }
  