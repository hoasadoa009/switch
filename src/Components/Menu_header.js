import React, { Component } from 'react';



class Menu__header extends Component {
  constructor(props){
    super(props);
    this.state = {
      menus : ['Home','What we do?','Testimonial','Contact Us']
    };
  }
  handleClick(menu){
    this.props.setActive(menu);
  }
  render() {
    
    var eleMenu = this.state.menus.map((menu, index)=>{
      return <li className={this.props.active === menu ? 'activeMenu' : ''} key={index} onClick={() => this.handleClick(menu)}><a href="#">{menu}</a></li>
    })

    return (
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <div className="menu">
              <ul className="nav">
                {eleMenu}

              </ul>
            </div>
          </div>
    );
  }
}

export default Menu__header;
