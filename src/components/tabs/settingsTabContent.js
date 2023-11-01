import { Table, Accordion, Row, Col, Button, Form, Image, InputGroup } from "react-bootstrap";
import eyeIcon from '../../assets/images/icons/eye.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import clipboardIcon from '../../assets/images/icons/clipboard.svg';
import { useState } from "react";

export const SettingsTabContent = () => {
    const [type, setType] = useState(false);
    const [type1, setType1] = useState(false);
    const [type2, setType2] = useState(false);
    const [type3, setType3] = useState(false);
    const [type4, setType4] = useState(false);
    return (
        <div className="SettingsTabContent p-3 p-md-5">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Wallets</Accordion.Header>
                    <Accordion.Body className="py-5">
                        <Row>
                            <Col sm={12} md={6} className="mb-5">
                                <Button className="main-button w-100">Generate</Button>
                            </Col>
                            <Col sm={12} md={6} className="mb-5">
                                <Button className="main-button w-100">Import</Button>
                            </Col>
                        </Row>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Address/Public Key</th>
                                    <th>Active</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle ps-2">1786</td>
                                    <td className="ps-2">
                                        <div>
                                            <div>0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</div>
                                            <Col md={9}>
                                                <InputGroup className="setting-public-key">
                                                    <Form.Control aria-label="Text input with dropdown button" readOnly disabled className="border-0 p-0" type={type ? "text" : "password"} value="3891fa8fd96dd8f41eceb4c61234a65e2ded2aa89a60a6dc3267f3647c6642be" />
                                                    <Button className="border-0 p-0 m-0 me-3" onClick={() => setType(!type)}><Image src={eyeIcon} width="15" /></Button>
                                                </InputGroup>
                                            </Col>
                                        </div>
                                    </td>
                                    <td className="align-middle ps-2">
                                        <Form.Check
                                            inline
                                            name="group1"
                                            type='radio'
                                        />
                                    </td>
                                    <td className="align-middle text-end">
                                        <Button className="border-0"><Image src={trashIcon} alt="remove" width="25" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle ps-2">1787</td>
                                    <td className="ps-2">
                                        <div>
                                            <div>0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</div>
                                            <Col md={9}>
                                                <InputGroup className="setting-public-key">
                                                    <Form.Control aria-label="Text input with dropdown button" readOnly disabled className="border-0 p-0" type={type1 ? "text" : "password"} value="3891fa8fd96dd8f41eceb4c61234a65e2ded2aa89a60a6dc3267f3647c6642be" />
                                                    <Button className="border-0 p-0 m-0 me-3" onClick={() => setType1(!type1)}><Image src={eyeIcon} width="15" /></Button>
                                                </InputGroup>
                                            </Col>
                                        </div>
                                    </td>
                                    <td className="align-middle ps-2">
                                        <Form.Check
                                            inline
                                            name="group1"
                                            type='radio'
                                        />
                                    </td>
                                    <td className="align-middle text-end">
                                        <Button className="border-0"><Image src={trashIcon} alt="remove" width="25" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle ps-2">1788</td>
                                    <td className="ps-2">
                                        <div>
                                            <div>0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</div>
                                            <Col md={9}>
                                                <InputGroup className="setting-public-key">
                                                    <Form.Control aria-label="Text input with dropdown button" readOnly disabled className="border-0 p-0" type={type2 ? "text" : "password"} value="3891fa8fd96dd8f41eceb4c61234a65e2ded2aa89a60a6dc3267f3647c6642be" />
                                                    <Button className="border-0 p-0 m-0 me-3" onClick={() => setType2(!type2)}><Image src={eyeIcon} width="15" /></Button>
                                                </InputGroup>
                                            </Col>
                                        </div>
                                    </td>
                                    <td className="align-middle ps-2">
                                        <Form.Check
                                            inline
                                            name="group1"
                                            type='radio'
                                        />
                                    </td>
                                    <td className="align-middle text-end">
                                        <Button className="border-0"><Image src={trashIcon} alt="remove" width="25" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle ps-2">1789</td>
                                    <td className="ps-2">
                                        <div>
                                            <div>0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</div>
                                            <Col md={9}>
                                                <InputGroup className="setting-public-key">
                                                    <Form.Control aria-label="Text input with dropdown button" readOnly disabled className="border-0 p-0" type={type3 ? "text" : "password"} value="3891fa8fd96dd8f41eceb4c61234a65e2ded2aa89a60a6dc3267f3647c6642be" />
                                                    <Button className="border-0 p-0 m-0 me-3" onClick={() => setType3(!type3)}><Image src={eyeIcon} width="15" /></Button>
                                                </InputGroup>
                                            </Col>
                                        </div>
                                    </td>
                                    <td className="align-middle ps-2">
                                        <Form.Check
                                            inline
                                            name="group1"
                                            type='radio'
                                        />
                                    </td>
                                    <td className="align-middle text-end">
                                        <Button className="border-0"><Image src={trashIcon} alt="remove" width="25" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle ps-2">1790</td>
                                    <td className="ps-2">
                                        <div>
                                            <div>0x8A4cc326b364d936c6df6f5D660fA419Ef6e1237</div>
                                            <Col md={9}>
                                                <InputGroup className="setting-public-key">
                                                    <Form.Control aria-label="Text input with dropdown button" readOnly disabled className="border-0 p-0" type={type4 ? "text" : "password"} value="3891fa8fd96dd8f41eceb4c61234a65e2ded2aa89a60a6dc3267f3647c6642be" />
                                                    <Button className="border-0 p-0 m-0 me-3" onClick={() => setType4(!type4)}><Image src={eyeIcon} width="15" /></Button>
                                                </InputGroup>
                                            </Col>
                                        </div>
                                    </td>
                                    <td className="align-middle ps-2">
                                        <Form.Check
                                            inline
                                            name="group1"
                                            type='radio'
                                        />
                                    </td>
                                    <td className="align-middle text-end">
                                        <Button className="border-0"><Image src={trashIcon} alt="remove" width="25" /></Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Networks</Accordion.Header>
                    <Accordion.Body className="py-5">
                        <Row>
                            <Col sm={12}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Networks</th>
                                            <th className="text-end">Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle ps-2">Ethereum</td>
                                            <td className="align-middle ps-2 text-end">
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type='radio'
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle ps-2">Base</td>
                                            <td className="align-middle ps-2 text-end">
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type='radio'
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Link to Terminal</Accordion.Header>
                    <Accordion.Body className="py-5">
                        <Row>
                            <Col sm={12}>
                                <div className="link-to-terminal-description mb-3">Paste the following key in your terminal to link this telegram account to your profile</div>
                                <div className="link-to-terminal-key mb-3 d-flex align-items-center"><span>9895be89-66ad-4e80-807b-3150367acd9e</span><span className="ms-2"><Image src={clipboardIcon} alt="copy" width="15" /></span></div>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </div>
    )
}