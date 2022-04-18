import { createRoot } from 'react-dom/client';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Button } from 'baseui/button';
import { BaseProvider, LightTheme } from 'baseui';
import { StyledLink } from 'baseui/link';
import CryptoConvert from './pages/CryptoConvert';
import Homepage from './pages/Homepage';

const engine = new Styletron();

function SuperLink(props) {
  return <StyledLink $as={NavLink} {...props} />;
}

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <BrowserRouter>
          <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left}>
              <StyledNavigationItem>Talpa World</StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
              <StyledNavigationItem>
                <SuperLink to="/crypto/eth">Ethereum</SuperLink>
              </StyledNavigationItem>
              <StyledNavigationItem>
                <SuperLink to="/crypto/btc">Bitcoin</SuperLink>
              </StyledNavigationItem>
              <StyledNavigationItem>
                <SuperLink to="/crypto/sol">Solana</SuperLink>
              </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
              <StyledNavigationItem>
                <Button>Contact</Button>
              </StyledNavigationItem>
            </StyledNavigationList>
          </HeaderNavigation>
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
