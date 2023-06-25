import Dropdown from 'react-bootstrap/Dropdown';

function Down() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Hãy chọn idol
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Huấn Hoa Hèo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Ngô Bá Khá</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tiến Bry</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Down;