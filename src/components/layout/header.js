import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';

export default function Header() {

    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
    const [, setProvider] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        if (wallet?.provider) {
            const { name, avatar } = wallet?.accounts[0].ens ?? {};
            const addressWithoutPrefix = wallet.accounts[0].address.slice(2);
            const { maxNibbles, maxCount } = findMaxConsecutiveNibble(addressWithoutPrefix);

            setAccount({
                address: wallet.accounts[0].address,
                balance: wallet.accounts[0].balance,
                ens: { name, avatar: avatar?.url }
            });

            console.log(`The nibble '${maxNibbles}' appears consecutively ${maxCount} times in the address.`);
        }
    }, [wallet]);

    useEffect(() => {
        if (wallet?.provider) {
            setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'));
        }
    }, [wallet]);

    const findMaxConsecutiveNibble = (address) => {
        let maxNibbles = [];
        let maxCount = 0;
        let currentNibble = '';
        let currentCount = 0;

        for (let i = 0; i < address.length; i++) {
            const nibble = address[i];
            if (nibble !== currentNibble) {
                currentNibble = nibble;
                currentCount = 1;
            } else {
                currentCount++;
            }

            if (currentCount > maxCount) {
                maxNibbles = [currentNibble];
                maxCount = currentCount;
            } else if (currentCount === maxCount) {
                maxNibbles.push(currentNibble);
            }
        }


        return { maxNibbles, maxCount };
    };


    return (
        <Navbar collapseOnSelect expand="lg" className="Header">
            <Container>
                <NavLink className="nav-link" to="/">
                    <Image src={logo} alt="logo" width="70" />
                    <span className="text-main-secondary logo-title">ESPRESSO</span>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="ms-auto">
                    {wallet?.provider && account ? (
                        <Button className="rounded-5 bg-black wallet-connect" onClick={() => { disconnect({ label: wallet.label }) }}>{(account.address).slice(0,6)}...{(account.address).slice(-4)}</Button>
                    ) : (
                        <Button className="rounded-5 bg-black wallet-connect" disabled={connecting} onClick={() => connect()}>CONNECT WALLET</Button>
                    ) }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}