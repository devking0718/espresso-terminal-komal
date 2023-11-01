import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';
import CurrentTime from "./currentTime";
import MouseMask from "./mouseMask";

export default function ConnectWallet() {
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
        <div className="ConnectWallet position-relative overflow-hidden" >
            <Container className="py-5">
                <Row className="mb-5">
                    <Col sm={12} md={6} className="mx-auto">
                        <Card className="shadow border-1 border-white p-3">
                            <Card.Body className="text-center">
                                {wallet?.provider && account ? (
                                    <>
                                        <Button className="mb-3" onClick={() => { disconnect({ label: wallet.label }) }}>Disconnect Wallet</Button>
                                        <div className="mb-5">Wallet Address : {account.address}</div>
                                    </>

                                ) : (
                                    <>
                                        <Button className="mb-3" disabled={connecting} onClick={() => connect()}>Connect Wallet</Button>
                                        <div className="mb-5">Wallet Address : Not connected.</div>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}