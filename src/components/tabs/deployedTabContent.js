import { Table, Accordion, Row, Col } from "react-bootstrap";

export const DeployedTabContent = () => {
    return (
        <div className="DeployedTabContent p-3 p-md-5">
            <Table responsive>
                <thead>
                    <tr>
                        <th width="5%"  className="text-start px-4">#</th>
                        <th width="15%" className="text-start px-3">Name</th>
                        <th width="10%" className="text-start d-none d-md-table-cell">Symbol</th>
                        <th width="10%" className="text-start d-none d-md-table-cell px-0">Supply</th>
                        <th width="50%" className="text-start d-none d-md-table-cell pe-5">Deployer</th>
                        <th width="10%" className="text-start pe-5 px-0 d-none d-md-table-cell">Network</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            <div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <table className="w-100 text-white">
                                                <thead>
                                                    <tr>
                                                        <td width="5%"  className=""> 1</td>
                                                        <td width="15%" className="text-start">Test Token Name</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">$</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">10</td>
                                                        <td width="50%" className="text-start d-none d-md-table-cell pe-5 px-3">0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</td>
                                                        <td width="10%" className="text-end d-none d-md-table-cell pe-5">ETH</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💲 Symbol : </span><span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔠 Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔢 Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔤 Class Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Initial Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Initial Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏱ Initial Tax Threshold : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔥 Burn : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">📩 Tax Receiver : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💰 Pre Mint Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💱 ETH LP amount : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔒 LP Lock duration : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per wallet : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per TX : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Open Trade Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Remove Limits Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Enable OnlyHumans : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Network : </span>
                                                    <span className="td-value">ETH</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🦉 Twitter : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💬 Telegram : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🌐 Website : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">👾 Discord : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <table className="w-100 text-white">
                                                <thead>
                                                    <tr>
                                                        <td width="5%"  className="">2</td>
                                                        <td width="15%" className="text-start">Test Token Name</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">$</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">10</td>
                                                        <td width="50%" className="text-start d-none d-md-table-cell pe-5 px-3">0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</td>
                                                        <td width="10%" className="text-end d-none d-md-table-cell pe-5">ETH</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💲 Symbol : </span><span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔠 Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔢 Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔤 Class Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Initial Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Initial Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏱ Initial Tax Threshold : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔥 Burn : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">📩 Tax Receiver : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💰 Pre Mint Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💱 ETH LP amount : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔒 LP Lock duration : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per wallet : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per TX : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Open Trade Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Remove Limits Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Enable OnlyHumans : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Network : </span>
                                                    <span className="td-value">ETH</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🦉 Twitter : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💬 Telegram : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🌐 Website : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">👾 Discord : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <table className="w-100 text-white">
                                                <thead>
                                                    <tr>
                                                        <td width="5%"  className="">3</td>
                                                        <td width="15%" className="text-start">Test Token Name</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">$</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">10</td>
                                                        <td width="50%" className="text-start d-none d-md-table-cell pe-5 px-3">0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</td>
                                                        <td width="10%" className="text-end d-none d-md-table-cell pe-5">ETH</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💲 Symbol : </span><span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔠 Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔢 Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔤 Class Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Initial Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Initial Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏱ Initial Tax Threshold : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔥 Burn : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">📩 Tax Receiver : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💰 Pre Mint Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💱 ETH LP amount : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔒 LP Lock duration : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per wallet : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per TX : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Open Trade Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Remove Limits Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Enable OnlyHumans : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Network : </span>
                                                    <span className="td-value">ETH</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🦉 Twitter : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💬 Telegram : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🌐 Website : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">👾 Discord : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <table className="w-100 text-white">
                                                <thead>
                                                    <tr>
                                                        <td width="5%"  className="">4</td>
                                                        <td width="15%" className="text-start">Test Token Name</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">$</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">10</td>
                                                        <td width="50%" className="text-start d-none d-md-table-cell pe-5 px-3">0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</td>
                                                        <td width="10%" className="text-end d-none d-md-table-cell pe-5">ETH</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💲 Symbol : </span><span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔠 Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔢 Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔤 Class Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Initial Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Initial Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏱ Initial Tax Threshold : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔥 Burn : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">📩 Tax Receiver : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💰 Pre Mint Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💱 ETH LP amount : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔒 LP Lock duration : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per wallet : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per TX : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Open Trade Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Remove Limits Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Enable OnlyHumans : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Network : </span>
                                                    <span className="td-value">ETH</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🦉 Twitter : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💬 Telegram : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🌐 Website : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">👾 Discord : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            <table className="w-100 text-white">
                                                <thead>
                                                    <tr>
                                                        <td width="5%"  className="">5</td>
                                                        <td width="15%" className="text-start">Test Token Name</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">$</td>
                                                        <td width="10%" className="text-start d-none d-md-table-cell">10</td>
                                                        <td width="50%" className="text-start d-none d-md-table-cell pe-5 px-3">0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</td>
                                                        <td width="10%" className="text-end d-none d-md-table-cell pe-5">ETH</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💲 Symbol : </span><span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔠 Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔢 Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔤 Class Name : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Initial Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Initial Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏱ Initial Tax Threshold : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🟢 Buy Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔴 Sell Tax : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔥 Burn : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">📩 Tax Receiver : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💰 Pre Mint Supply : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💱 ETH LP amount : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🔒 LP Lock duration : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per wallet : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🚫 Max token per TX : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Open Trade Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">⏳ Remove Limits Delay : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Enable OnlyHumans : </span>
                                                    <span className="td-value">Test Token Name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">✋ Network : </span>
                                                    <span className="td-value">ETH</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🦉 Twitter : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">💬 Telegram : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">🌐 Website : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                                <Col sm={12} md={6} className="my-3">
                                                    <span className="td-title">👾 Discord : </span>
                                                    <span className="td-value">https://twitter.com/token_name</span>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}