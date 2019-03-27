import React, { Component } from 'react';



class ListPorts extends Component {
  render() {
  	var lists = [
  		{
  			image  : 'img-ports.jpg',
  			content : 'Lorem Ipsum is simply dummy text',
  			btnColor : '#54d154',
  			btnText : 'magazine'
  		},
  		{
  			image  : 'img-ports1.jpg',
  			content : 'Lorem Ipsum is simply dummy text',
  			btnColor : '#ffba00',
  			btnText : 'ui design'
  		},
  		{
  			image  : 'img-ports2.jpg',
  			content : 'Lorem Ipsum is simply dummy text',
  			btnColor : '#089dea',
  			btnText : 'photography'
  		},
  		{
  			image  : 'img-ports3.jpg',
  			content : 'Lorem Ipsum is simply dummy text',
  			btnColor : '#f34d04',
  			btnText : 'book'
  		},{
  			image  : 'img-ports4.jpg',
  			content : 'Lorem Ipsum is simply dummy text',
  			btnColor : '#ffba00',
  			btnText : 'ui design'
  		}
  	];
  	let eleList = lists.map((list,index)=>{
  		return <li><a href="">
	              <img src={"./images/" + list.image} className="float-left mr-2" />
	              <p>{list.content}</p>
	              <span style={{background: list.btnColor}}>magazine</span>
	            </a></li>
  	});
    return (
          <div className="listPorts">
	          <ul className="nav">
	            {eleList}
	          </ul>
	        </div>
    );
  }
}

export default ListPorts;
