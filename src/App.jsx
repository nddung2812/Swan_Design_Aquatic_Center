import ReactHowler from 'react-howler'
import './App.css'
import WaterWave from 'react-water-wave';
import KoiFish from './assets/Koifish.mp4'
import BlueDream from './assets/BlueDream.mp3';
import DuckweedSm from './assets/duckweedsmall.png';
import DuckweedMd from './assets/duckweedmedium.png';

function App() {
  return (
    <WaterWave
      dropRadius={60}
      perturbance={0.05}
      interactive={true}
      resolution={512}
    >
      {({ pause, play }) => (
        <div className="container">
          <video src={KoiFish} autoPlay muted loop/>
          <ReactHowler src={BlueDream} playing={true} volume={0.05} loop={true}/>
          <img className='duckWeedSm' src={DuckweedSm}/> 
          <img className='duckWeedMd' src={DuckweedMd}/> 
          <img className='duckWeedSm1' src={DuckweedSm}/> 
          <img className='duckWeedMd' src={DuckweedMd}/> 
          <img className='duckWeedSm' src={DuckweedSm}/> 
          <img className='duckWeedSm' src={DuckweedSm}/>
          <div className='navbar'>
            <div className="navbar-home">Home</div>
            <div className="navbar-home">Blogs</div>
            <div className="navbar-home">Home</div>
            <div className="navbar-home">Home</div>
          </div>
          <div className="banner-home">

          </div>

        </div>
      )}
    </WaterWave>
  );
}

export default App
