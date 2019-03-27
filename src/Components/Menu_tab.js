import React, { Component } from 'react';
import Image_our from './Image_our';


class Menu_tab extends Component {
	handleClickColor(value){

		this.props.onChangeColor(value);
	}
  render() {

  	var menutabs = ['Photography','Design','Print'];
  	let eleMenuTab = menutabs.map((menutab,index)=>{
  		return <li className="nav-item" key={index}><a href={'#'+menutab} data-toggle="tab" className={this.props.active===menutab ? 'activeMenuTab':''} onClick={() => this.handleClickColor(menutab)}>{menutab}</a></li>
  	});
    return (
           <div className="col-12">
                <div className="menuTab">
                	<ul className="nav ">
	                	{eleMenuTab}
	                </ul>
	               	<div className="tab-content mt-60 mb-60" id="nav-tabContent" >
					  <div className="tab-pane fade show active" id="Photography" >
					  	<div className="container">
					  		<Image_our />
					  	</div>
					  </div>



					  <div className="tab-pane fade" id="Design" role="tabpanel" >.2..</div>
					  <div className="tab-pane fade" id="Print" role="tabpanel" role="tabpanel">.3..</div>
					</div>
                </div>
            </div>
    );
  }
}

export default Menu_tab;
