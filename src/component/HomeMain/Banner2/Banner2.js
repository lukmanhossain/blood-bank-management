import React from 'react';
import './Banner.css';
import banner2 from '../../../images/banner2.gif'
import { NavLink } from 'react-router-dom';


const Banner2 = () => {
    return (

        // Banner Section
        <div className='row mx-5 my-5'>
            <div className="col-lg-6 col-sm-12 p-5">
                <h1> <span className='text-success'>Donate Blood</span> <br />
                    <span className='text-danger'> Save Life</span>
                </h1>
                <p className='mt-2'>This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations. One can search the desired blood group according to his or her prefferred location</p>
                {/* <button type="button" class="btn btn-outline-danger mt-5">Find Donor</button> */}

                <NavLink to='/donar'>
                    <button type="button" class="btn btn-outline-danger mt-2">Find Donor</button>
                </NavLink>
            </div>
            <div className="col-lg-6 col-sm-12">
                <img className='img-fluid' src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Banner2;