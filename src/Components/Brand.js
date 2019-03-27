import React, { Component } from 'react';



class Brand extends Component {
  render() {
  	var brands = [
  		{
  			image : 'brand.png',
  			alt : 'google'
  		},
  		{
  			image : 'brand1.png',
  			alt : 'yahoo'
  		},
  		{
  			image : 'brand2.png',
  			alt : 'microsoft'
  		},
  		{
  			image : 'brand3.png',
  			alt : 'intel'
  		},
  		{
  			image : 'brand4.png',
  			alt : 'qualcomm'
  		},
  		{
  			image : 'brand5.png',
  			alt : 'cisco'
  		},
  		{
  			image : 'brand6.png',
  			alt : 'apple'
  		},
  		{
  			image : 'brand7.png',
  			alt : 'asus'
  		},
  	];
  	let eleBrand = brands.map((brand,index)=>{
        return <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mb-6 text-center" key={index}>
                  <div className="brand">
                     <img src={"./images/" + brand.image} alt={brand.alt} />
                  </div>
               </div>
    })
    return (
            <div className="row">
           		{eleBrand}
            </div>
    );
  }
}

export default Brand;
