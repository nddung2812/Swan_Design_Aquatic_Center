import './Duckweeds.css'
import DuckweedSm from '../assets/duckweedsmall.png';
import DuckweedMd from '../assets/duckweedmedium.png';
import Duckweedsm2 from '../assets/duckweedsmall2.png';

const Duckweeds = () => {
  return (
    <>
        <img className='duckWeedSm' src={DuckweedSm}/> 
        <img className='duckWeedMd weedmd1' src={DuckweedMd}/> 
        <img className='duckWeedSm weed1' src={DuckweedSm}/> 
        <img className='duckWeedSm weed1' src={DuckweedSm}/> 
        <img className='duckWeedMd weedmd2' src={DuckweedMd}/> 
        <img className='duckWeedSm weed3' src={DuckweedSm}/>
        <img className='duckWeedSm weed4' src={Duckweedsm2}/>
        <img className='duckWeedSm weed5' src={Duckweedsm2}/>
        <img className='duckWeedSm weed2' src={DuckweedSm}/> 
        <img className='duckWeedSm weed6' src={Duckweedsm2}/>
    </>
  )
}

export default Duckweeds