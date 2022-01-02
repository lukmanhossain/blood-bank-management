import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
    <div className="">
   <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>A+<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>1</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>B+<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>10</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>O+<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>15</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>AB+<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>7</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>A-<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>1</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>B-<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>1</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>O-<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>1</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <div>
             <h4 className='bollad-group'>AB-<i class="fas fa-burn bollad"></i></h4>
          </div>
          <p className='person'>1</p>
      </div>
    </div>
   
   
    <div className="col">
      <div className="p-3 border bg-light">
          <p className='donor-icon'><i class="fas fa-users"></i></p>
          <p className='total'>Total Donors</p>
          <p className='count'>4</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <p className='donor-icon'><i class="fas fa-spinner"></i></p>
          <p className='total'>Total Requests</p>
          <p className='count'>5</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <p className='donor-icon'><i class="far fa-check-circle"></i></p>
          <p className='total'>Approved Requests</p>
          <p className='count'>8</p>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <p className='donor-icon'><i class="fas fa-burn "></i></p>
          <p className='total'>Total Blood Unit</p>
          <p className='count'>4</p>
      </div>
    </div>
    
    
  </div>
</div>
 </div>
    );
};

export default Home;