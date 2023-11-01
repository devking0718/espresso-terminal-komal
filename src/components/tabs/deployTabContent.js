import { Col, Row, InputGroup, Form, DropdownButton, Dropdown, Image, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import InfoIcon from "../../assets/images/icons/tooltip.svg";

export const DeployTabContent = () => {

    const TooltipBody = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a>{children}</a>
        </OverlayTrigger>
    );

    return (
        <div className="DeployTabContent p-3 p-md-5">
            <div className="tab-title text-center"><span className="text-main-primary">Token</span> <span className="text-main-secondary">Parameters</span></div>
            <hr className="secondary-hr my-5" />
            <Row>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>💲 Symbol <TooltipBody title="Type a Symbol for your Token" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🔠 Name <TooltipBody title="Type a Name for your Token" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🔢 Supply <TooltipBody title="Choose Supply for your Token" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >1 million</Dropdown.Item>
                            <Dropdown.Item >10 million</Dropdown.Item>
                            <Dropdown.Item >100 million</Dropdown.Item>
                            <Dropdown.Item >1 billion</Dropdown.Item>
                            <Dropdown.Item >10 billion</Dropdown.Item>
                            <Dropdown.Item >100 billion</Dropdown.Item>
                            <Dropdown.Item >1 tillion</Dropdown.Item>
                            <Dropdown.Item >10 tillion</Dropdown.Item>
                            <Dropdown.Item >100 tillion</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🔤 Class Name <TooltipBody title="Type a Class Name for your Token: Must be like: TokenNameExample" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🟢 Initial Buy Tax <TooltipBody title="Choose Initial Buy Tax, if any" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >0%</Dropdown.Item>
                            <Dropdown.Item >5%</Dropdown.Item>
                            <Dropdown.Item >10%</Dropdown.Item>
                            <Dropdown.Item >15%</Dropdown.Item>
                            <Dropdown.Item >20%</Dropdown.Item>
                            <Dropdown.Item >25%</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🔴 Initial Sell Tax <TooltipBody title=" Choose Initial Sell Tax, if any" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >0%</Dropdown.Item>
                            <Dropdown.Item >5%</Dropdown.Item>
                            <Dropdown.Item >10%</Dropdown.Item>
                            <Dropdown.Item >15%</Dropdown.Item>
                            <Dropdown.Item >20%</Dropdown.Item>
                            <Dropdown.Item >25%</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>⏱ Initial Tax Threshold <TooltipBody title="Choose after how many buys the normal taxes should be applied:" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >0</Dropdown.Item>
                            <Dropdown.Item >15</Dropdown.Item>
                            <Dropdown.Item >30</Dropdown.Item>
                            <Dropdown.Item >45</Dropdown.Item>
                            <Dropdown.Item >60</Dropdown.Item>
                            <Dropdown.Item >75</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🟢 Buy Tax <TooltipBody title="Choose Buy Tax, if any" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >0%</Dropdown.Item>
                            <Dropdown.Item >1%</Dropdown.Item>
                            <Dropdown.Item >2%</Dropdown.Item>
                            <Dropdown.Item >3%</Dropdown.Item>
                            <Dropdown.Item >4%</Dropdown.Item>
                            <Dropdown.Item >5%</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🔴 Sell Tax <TooltipBody title="Choose Sell Tax, if any" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >0%</Dropdown.Item>
                            <Dropdown.Item >1%</Dropdown.Item>
                            <Dropdown.Item >2%</Dropdown.Item>
                            <Dropdown.Item >3%</Dropdown.Item>
                            <Dropdown.Item >4%</Dropdown.Item>
                            <Dropdown.Item >5%</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🔥 Burn <TooltipBody title="Choose Burn Percentage for each Transaction, if any" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >0%</Dropdown.Item>
                            <Dropdown.Item >0.5%</Dropdown.Item>
                            <Dropdown.Item >1%</Dropdown.Item>
                            <Dropdown.Item >2%</Dropdown.Item>
                            <Dropdown.Item >2.5%</Dropdown.Item>
                            <Dropdown.Item >3%</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>📩 Tax Receiver <TooltipBody title="Choose which Address will receive Token Taxes" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >Current Wallet</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>💰 Pre Mint Supply <TooltipBody title=" Choose how many Tokens you want to allocate to yourself, as a Percentage of Supply" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >1%</Dropdown.Item>
                            <Dropdown.Item >2%</Dropdown.Item>
                            <Dropdown.Item >3%</Dropdown.Item>
                            <Dropdown.Item >5%</Dropdown.Item>
                            <Dropdown.Item >10%</Dropdown.Item>
                            <Dropdown.Item >20%</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>💱 ETH LP amount <TooltipBody title="Choose how much ETH you want to create the pool with" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >0.3 ETH</Dropdown.Item>
                            <Dropdown.Item >0.5 ETH</Dropdown.Item>
                            <Dropdown.Item >1 ETH</Dropdown.Item>
                            <Dropdown.Item >2 ETH</Dropdown.Item>
                            <Dropdown.Item >3 ETH</Dropdown.Item>
                            <Dropdown.Item >5 ETH</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🔒 LP Lock duration <TooltipBody title="Choose for how long you want to lock LP" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >30 Days</Dropdown.Item>
                            <Dropdown.Item >60 Days</Dropdown.Item>
                            <Dropdown.Item >90 Days</Dropdown.Item>
                            <Dropdown.Item >120 Days</Dropdown.Item>
                            <Dropdown.Item >150 Days</Dropdown.Item>
                            <Dropdown.Item >180 Days</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🚫 Max token per wallet <TooltipBody title="Choose the Maximum number of Tokens a Wallet can hold, as a Percentage of Supply:" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >3%</Dropdown.Item>
                            <Dropdown.Item >5%</Dropdown.Item>
                            <Dropdown.Item >10%</Dropdown.Item>
                            <Dropdown.Item >15%</Dropdown.Item>
                            <Dropdown.Item >20%</Dropdown.Item>
                            <Dropdown.Item >No Limit</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🚫 Max token per TX <TooltipBody title="Choose the Maximum number of Tokens for a Single Transaction, as a Percentage of Supply:" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >1%</Dropdown.Item>
                            <Dropdown.Item >2%</Dropdown.Item>
                            <Dropdown.Item >3%</Dropdown.Item>
                            <Dropdown.Item >5%</Dropdown.Item>
                            <Dropdown.Item >8%</Dropdown.Item>
                            <Dropdown.Item >No Limit</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>⏳ Open Trade Delay <TooltipBody title="Choose how long to wait before opening trading" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >15 Min</Dropdown.Item>
                            <Dropdown.Item >30 Min</Dropdown.Item>
                            <Dropdown.Item >60 Min</Dropdown.Item>
                            <Dropdown.Item >90 Min</Dropdown.Item>
                            <Dropdown.Item >120 Min</Dropdown.Item>
                            <Dropdown.Item >180 Min</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>⏳ Remove Limits Delay <TooltipBody title="Choose how long to wait before removing limits for max amount per wallet and transaction" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >Keep Limits</Dropdown.Item>
                            <Dropdown.Item >2</Dropdown.Item>
                            <Dropdown.Item >4</Dropdown.Item>
                            <Dropdown.Item >6</Dropdown.Item>
                            <Dropdown.Item >8</Dropdown.Item>
                            <Dropdown.Item >10</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={12} className="mb-5">
                    <Form.Label>✋ Enable OnlyHumans <TooltipBody title="Default title" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                        <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item >10%</Dropdown.Item>
                            <Dropdown.Item >20%</Dropdown.Item>
                            <Dropdown.Item >50%</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🦉 Twitter <TooltipBody title="Write your project's Twitter link Or hit Set None to leave empty" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>💬 Telegram <TooltipBody title="Write your project's Telegram group link Or hit Set None to leave empty" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>🌐 Website <TooltipBody title="Write your project's Website link Or hit Set None to leave empty" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
                <Col sm={12} md={6} className="mb-5">
                    <Form.Label>👾 Discord <TooltipBody title="Write your project's Discord link Or hit Set None to leave empty" id="t-1"><Image src={InfoIcon} width="10" /></TooltipBody></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
            </Row>
            <hr className="secondary-hr my-5" />
            <Row>
                <Col sm={12} md={3} className="mx-auto mb-5">
                    <Button className="main-button w-100">Deploy</Button>
                </Col>
            </Row>
        </div>
    )
}