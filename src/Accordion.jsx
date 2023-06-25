// import Accordion from 'react-bootstrap/Accordion';
// import App from './App';
import { Accordion } from 'react-bootstrap';

function Hit() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Huấn Hoa Hòe</Accordion.Header>
                <Accordion.Body>
                    Cần cù bù siêng năng
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Ngô Bá Khá</Accordion.Header>
                <Accordion.Body>
                    Xã hội này ko có đúng sai, chỉ có kẻ mạnh và kẻ yếu
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Hit;