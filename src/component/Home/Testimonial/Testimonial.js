import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, address, description, img } = testimonial;
    console.log("testimonial" + testimonial);
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} alt='' />
                <p className='text-info fw-bold'>{description}</p>
            </div>
            <div className="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default Testimonial;