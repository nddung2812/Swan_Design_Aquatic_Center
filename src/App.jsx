import './App.css'
import WaterWave from 'react-water-wave';
import KoiFish from './assets/Koifish.mp4'
import BlueDream from './assets/BlueDream.mp3'
import ReactHowler from 'react-howler'
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
        </div>
      )}
    </WaterWave>
  );
}

export default App
