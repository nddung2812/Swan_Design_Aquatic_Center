import './App.css'
import WaterWave from 'react-water-wave';
import test from './assets/test.jpg'

function App() {
  return (
    <WaterWave
      imageUrl={test}
      style={{ width: '100%', height: '100%', backgroundSize: 'contain' }}
    >
      {({ pause, play }) => (
        <div className="container">
          <h1>React Water Wave</h1>
          <h3>
            MIT ©{' '}
            <a
              href="https://github.com/homerchen19"
              rel="noopener noreferrer"
              target="_blank"
            >
              homerchen19
            </a>
          </h3>
        </div>
      )}
    </WaterWave>
  );
}

export default App
