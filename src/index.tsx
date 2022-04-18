import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider, LightTheme } from 'baseui';
import CryptoConvert from './pages/CryptoConvert';
import Homepage from './pages/Homepage';
import Navigation from './components/Navigation';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <BrowserRouter>
          <Navigation />
          <Routes>
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
