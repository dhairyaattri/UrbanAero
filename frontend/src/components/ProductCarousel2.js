// import React from 'react'
// import { Carousel, Image } from 'react-bootstrap'

// const ProductCarousel2 = () => {
//     return (
//         < Carousel variant="light" style={{}} className="carousel2" >
//             <Carousel.Item>
//                 <Image
//                     className="d-block w-100"
//                     src="/images/b1.png"
//                     alt="First slide"
//                 />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <Image
//                     className="d-block w-100"
//                     src="/images/b2.png"
//                     alt="Second slide"
//                 />
//             </Carousel.Item>
//         </Carousel >
//     )
// }

// export default ProductCarousel2

import React from 'react';
import Carousel from 'nuka-carousel';

// eslint-disable-next-line
export default class extends React.Component {

    render() {
        return (
            <div style={{ marginTop: '-14px' }}>
                <Carousel>
                    {/* eslint-disable-next-line */}
                    <img src="/images/s0.jpeg" />
                    {/* eslint-disable-next-line */}
                    <img src="/images/s1.jpeg" />
                </Carousel>
                <br />
            </div>

        );
    }
}