import './App.css'
import WaterWave from 'react-water-wave';
import test from './assets/ocean.mp4'
import KoiFish from './assets/Koifish.mp4'
// import testImage from './assets/test.jpg'

function App() {
  return (
    <WaterWave
      // imageUrl={test}
      // style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
      dropRadius={60}
      perturbance={0.05}
      interactive={true}
      resolution={512}
    >
      {({ pause, play }) => (
        <div className="container">
          <video src={KoiFish} autoPlay muted loop/>
        </div>
      )}
    </WaterWave>
  );
}

export default App
