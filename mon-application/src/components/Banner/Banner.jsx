import React from "react";

import banktree from "../../asset/banktree.jpeg"
import "./banner.scss"
const Banner=()=>{
return (
    <div className="banner">
<img
          className="banner-image"
          src={banktree}
          alt="Argent Bank banner"
        />
        <div className="banner-text">
          <section className='introduction'>
               
                <p className='subtitle'>No fees.</p>
                <p className='subtitle'>No minimum deposit.</p>
                <p className='subtitle'>High interest rates.</p>
                <p className='text'>Open a savings account with Argent Bank today!</p>
            </section></div>
          
    </div>
)
   
}
export default Banner