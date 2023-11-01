import { Web3OnboardProvider, init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import coinbaseModule from '@web3-onboard/coinbase';
import ConnectWallet from './components/connectWallet';
import './App.css';
import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import { Layout } from './components/layout/layout';

const INFURA_KEY = '14b5cb87ac754818a76012c78a4affe4';

const injected = injectedModule();
const coinbase = coinbaseModule();
const walletConnect = walletConnectModule({ projectId: 'f6bd6e2911b56f5ac3bc8b2d0e2d7ad5' });

const wallets = [
  injected,
  coinbase,
  walletConnect
];

const chains = [
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`
  },
  {
    id: '0x5',
    token: 'ETH',
    label: 'Goerli',
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_KEY}`
  },
  {
    id: '0x13881',
    token: 'MATIC',
    label: 'Polygon - Mumbai',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com'
  },
  {
    id: '0x38',
    token: 'BNB',
    label: 'Binance',
    rpcUrl: 'https://bsc-dataseed.binance.org/'
  },
];

const appMetadata = {
  name: 'Connect Wallet Example',
  icon: '<svg>My App Icon</svg>',
  description: 'Example showcasing how to connect a wallet.',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
  ]
}

const web3Onboard = init({
  wallets,
  chains,
  appMetadata,
  theme: 'dark'
})


const App = memo(() => {
  return (
    <div className="App">
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<HomePage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Web3OnboardProvider>
    </div>
  );
});

export default App;
