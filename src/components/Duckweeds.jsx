import './Duckweeds.css'
import DuckweedSm from '../assets/duckweedsmall.png';
import DuckweedMd from '../assets/duckweedmedium.png';

const Duckweeds = () => {
  return (
    <>
        <img className='duckWeedSm' src={DuckweedSm}/> 
        <img className='duckWeedMd weedmd1' src={DuckweedMd}/> 
        <img className='duckWeedSm weed1' src={DuckweedSm}/> 
        <img className='duckWeedMd weedmd2' src={DuckweedMd}/> 
        <img className='duckWeedSm weed2' src={DuckweedSm}/> 
        <img className='duckWeedSm weed3' src={DuckweedSm}/>
    </>
  )
}

export default Duckweeds