import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from './textBlock';
import './App.css';

const img = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const speeds = {
  background: -1,
  mountains: -0.85,
  logoLand: -0.7,
  jungle1: -0.65,
  jungle2: -0.55,
  jungle3: -0.5,
  jungle4: -0.4,
  manOnMountain: 0,
  jungle5: 0,
  textBlock: 0
};

const speeds2 = {
  background: 0.25,
  mountains: 0.3,
  logoLand: -0.1,
  jungle1: 0.3,
  jungle2: 0.35,
  jungle3: 0.5,
  jungle4: 0.45,
  manOnMountain: 0.40,
  jungle5: 0.35,
  textBlock: 0.25
}

const customConfig = {
  tension: 120, // Напряжение
  friction: 14, // Трение
  precision: 0.1, // Точность
  clamp: false // Зажим
};

function App() {
  return (
    <div className="min-h-[100vh] relative">
      <Parallax pages={2} style={{ top: '0', left: '0', backgroundColor: '#FFAF1B' }}>
        <ParallaxLayer 
          offset={0}
          speed={speeds.background}
          style={{
            backgroundImage: `url('images/background.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.mountains}
          style={{
            backgroundImage: `url('images/mountains.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.logoLand}
          style={{
            backgroundImage: `url('images/logo_land.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.jungle1}
          style={{
            backgroundImage: `url('images/jungle1.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.jungle2}
          style={{
            backgroundImage: `url('images/jungle2.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.jungle3}
          style={{
            backgroundImage: `url('images/jungle3.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.jungle4}
          style={{
            backgroundImage: `url('images/jungle4.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.manOnMountain}
          style={{
            backgroundImage: `url('images/man_on_mountain.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={0}
          speed={speeds.jungle5}
          style={{
            backgroundImage: `url('images/jungle5.png')`,
            ...img
          }}
          config={customConfig}
        />
        <ParallaxLayer 
          offset={1}
          speed={speeds.textBlock}
        >
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
