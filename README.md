# Web3 Frontend Test Project

I built this project using React.js + React-bootstrap + Web3-onboard.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## 1. Connect the metamask.

I implemented wallect connection function using Web3-onboard package.

- "@web3-onboard/injected-wallets" is a module for Metamask connections.

- "@web3-onboard/walletconnect" is a module for Walletconnect connections.

- "@web3-onboard/coinbase" is a module for Coinbase connections.

<code>
import { useConnectWallet } from '@web3-onboard/react';

<br/>
const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();</code>



### a. Display the public address(s) chosen in the wallet on the Frontend


