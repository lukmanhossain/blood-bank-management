import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import Messenger from './Messenger/Messenger';
import Services from './Services/Services';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Banner></Banner>
      <Services></Services>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Messenger></Messenger>
      <Footer></Footer>



    </div>
  );
};

export default Home;