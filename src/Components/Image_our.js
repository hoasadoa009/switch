import React, { Component } from 'react';



class Image_our extends Component {
  render() {
  	var images = ['item.jpg','item1.jpg','item2.jpg','item3.jpg','item4.jpg','item5.jpg','item6.jpg','item7.jpg','item8.jpg','item9.jpg','item.jpg','item1.jpg'];
  	let eleImage = images.map((image,index)=>{
  		return <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 " key={index}>
           			<div className="tabcontent-item mb-4">
           				<img src={'./images/' + image}  alt="image" />
           			</div>
				</div>
  	})
    return (
           <div className="row">
           		{eleImage}
           </div>
           		
    );
  }
}

export default Image_our;
