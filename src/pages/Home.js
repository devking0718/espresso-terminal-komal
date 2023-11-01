import { Card, Col, Container, Image, Row, Tabs, Tab } from "react-bootstrap";
import BannerImage from '../assets/images/logo.png';
import { DeployTabContent } from "../components/tabs/deployTabContent";
import { DeployedTabContent } from "../components/tabs/deployedTabContent";
import { SettingsTabContent } from "../components/tabs/settingsTabContent";

export default function HomePage() {
    return (
        <div className="HomePage">
            <Container>
                <section className="Main-banner">
                    <Row>
                        <Col sm={12} md={6}>
                            <Image src={BannerImage} alt="banner" width="100%" />
                        </Col>
                        <Col sm={12} md={6} className="d-flex align-items-center justify-content-center flex-column">
                            <p className="banner-title text-center mb-4"><span>ESPRESSO</span> <span className="text-main-secondary">TERMINAL</span></p>
                            <p className="banner-subtitle text-center">An Intuitive Web Application for instant Token Deployment</p>
                        </Col>
                    </Row>
                </section>
                <section className="Current-wallet my-5 py-5">
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <Card className="current-wallet-card px-0 px-md-5">
                                    <Card.Body>
                                        <Card.Title className="text-center"><p>Current Wallet</p></Card.Title>
                                        <Card.Text className="mb-2"><span>🌐</span> <span className="text-main-primary">Connected Network : </span><span> Ethereum</span></Card.Text>
                                        <Card.Text className="mb-2"><span>🧳</span> <span className="text-main-primary">Deployer Wallet Address : </span><span> 0xEa6aC906c1d3d02E688d2b44eb5424faC92FB08C</span></Card.Text>
                                        <div className="d-flex card-text align-items-sm-center align-items-start justify-content-between flex-column flex-md-row">
                                            <p className="mb-2"><span>📈</span> <span className="text-main-primary">ETH Balance : </span><span> 0.0 Ξ</span></p>
                                            <p className="mb-2"><span>☕</span> <span className="text-main-primary">ESPR Balance : </span><span> 0.0 ⛾</span></p>
                                            <p className="mb-2"><span>⚔️</span> <span className="text-main-primary">Tier : </span><span> Ethereum</span></p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="Main-tab my-5 py-5">
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <Tabs
                                    defaultActiveKey="deploy"
                                    id="fill-tab-example"
                                    className="mb-3"
                                    fill
                                >
                                    <Tab eventKey="deploy" title="Deploy Token">
                                        <DeployTabContent/>
                                    </Tab>
                                    <Tab eventKey="deployed" title="Deployed Tokens">
                                        <DeployedTabContent/>
                                    </Tab>
                                    <Tab eventKey="settings" title="Settings">
                                        <SettingsTabContent/>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Container>
        </div>
    )
}