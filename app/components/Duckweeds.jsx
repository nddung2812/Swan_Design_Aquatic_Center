import '../styles/Duckweeds.css'
import DuckweedSm from '../../public/duckweedsmall.png';
import DuckweedMd from '../../public/duckweedmedium.png';
import Duckweedsm2 from '../../public/duckweedsmall2.png';
import Image from "next/image";

const Duckweeds = () => {
  return (
    <>
        <Image className='duckWeedSm' alt="duckweed" src={DuckweedSm} /> 
        <Image className='duckWeedMd weedmd1' alt="duckweed" src={DuckweedMd}/> 
        <Image className='duckWeedSm weed1' alt="duckweed" src={DuckweedSm}/> 
        <Image className='duckWeedSm weed1' alt="duckweed" src={DuckweedSm}/> 
        <Image className='duckWeedMd weedmd2' alt="duckweed" src={DuckweedMd}/> 
        <Image className='duckWeedSm weed3' alt="duckweed" src={DuckweedSm}/>
        <Image className='duckWeedSm weed4' alt="duckweed" src={Duckweedsm2}/>
        <Image className='duckWeedSm weed5' alt="duckweed" src={Duckweedsm2}/>
        <Image className='duckWeedSm weed2' alt="duckweed" src={DuckweedSm}/> 
        <Image className='duckWeedSm weed6' alt="duckweed" src={Duckweedsm2}/>
    </>
  )
}

export default Duckweeds