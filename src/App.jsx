import { useState } from 'react';
import ReactHowler from 'react-howler'
import './App.css'
import WaterWave from 'react-water-wave';
import Ocean from './assets/Ocean.jpg'
import KoiFish from './assets/Koifish.mp4';
import BlueDream from './assets/BlueDream.mp3';
import Navbar from './components/Navbar';
import Duckweeds from './components/Duckweeds';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <>
    {isLoading && <WaterWave
        imageUrl={Ocean}
        style={{ width: '100%', height: '100%', backgroundSize: 'contain' }}
        dropRadius={30}
        perturbance={0.05}
    >
      {({ pause, play }) => (
        <div className="container"></div>
      )}
      </WaterWave>}
    <WaterWave
      dropRadius={60}
      perturbance={0.05}
      interactive={true}
      resolution={512}
    >
      {({ pause, play }) => (
        <div className="container">
          <video 
            src={KoiFish} 
            autoPlay 
            muted 
            loop
            onLoadedData={handleLoadedData}
            style={{ display: isLoading ? "none" : "block" }}
          />
          <ReactHowler src={BlueDream} playing={true} volume={0.05} loop={true}/>
          <Duckweeds />
          <Navbar />
          <div className="banner-home">

          </div>
          <Footer />
        </div>
      )}
    </WaterWave>
    </>
  );
}

export default App
