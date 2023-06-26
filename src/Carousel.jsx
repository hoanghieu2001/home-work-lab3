import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <Carousel className='row'>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://genshin-guide.com/wp-content/uploads/tho-bay-mau.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Con Thỏ</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                    className="d-block w-100 col-12"
                    src="https://media.techmaster.vn/api/static/crop/c6o8q3s51cof74mrqq70"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h4>Ông Ba</h4>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100 col-12"
                    src="https://salt.tikicdn.com/ts/product/8b/16/5f/748ca74556368ceba540ebfe3a44de97.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Chị xô</h3>
                    <p>

                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default Carousels;