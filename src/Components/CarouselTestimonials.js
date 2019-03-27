import React, { Component } from 'react';



class CarouselTestimonials extends Component {

  render() {
  	var comments = [
  		{
  			comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  			author : 'Mr.Hero',
  			company : 'CEO of MeMe, Inc'
  		},
  		{
  			comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  			author : 'Mr.Huynh',
  			company : 'DEV of Framgia, Inc'
  		},
  	];
  	let eleComment = comments.map((comment,index)=>{
  		return <div className="item" key={index}>
	              <div className="comment__content">
	                <p>{comment.comment}</p>
	              </div>
	              <div className="comment__author">
	                <img  src="./images/icon.jpg" alt="..." />
	                <p >{comment.author}</p>
	                <span >{comment.company}</span>
	              </div>
	            </div>
  	})
    return (
    	<div className="owl-carousel owl-theme">
          {eleComment}
          </div>
    );
  }
}

export default CarouselTestimonials;
