import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider, LightTheme } from 'baseui';
import CryptoConvert from './pages/CryptoConvert';
import Homepage from './pages/Homepage';
import Navigation from './components/Navigation';
import Crypto from './pages/Crypto';
import ConvertAudioVideo from './pages/ConvertAudioVideo';
import Software from './pages/Software';
import Productivity from './pages/Productivity';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/software" element={<Software />} />
            <Route path="/video" element={<ConvertAudioVideo />} />
            <Route path="/crypto/:id" element={<CryptoConvert />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(<App />);
