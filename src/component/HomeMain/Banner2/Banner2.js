import React from 'react';
import './Banner.css';
import banner2 from '../../../images/banner2.gif'


const Banner2 = () => {
    return (
        <section>
            <div class="intro p-5">
                <div class=" p-5">
                    <h1> <span className='text-info'>Save Life</span>
                        <span className='text-danger'> Blood Bank</span>

                    </h1>
                    <button type="button" class="btn btn-outline-info mt-5">Find Donor</button>
                </div>

                <div class="intro-item">
                    <img src={banner2} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner2;