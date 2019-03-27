import React, { Component } from 'react';



class Meet extends Component {
	constructor(props){
		super(props);
		this.state = [
	  		{
	  			id : this.generate(),
	  			image : 'meetitem.png',
	  			author : 'Krisna wijaya'
	  		},
	  		{
	  			id : this.generate(),
	  			image : 'meetitem1.png',
	  			author : 'Gabriel Yoshua'
	  		},
	  		{
	  			id : this.generate(),
	  			image : 'meetitem2.png',
	  			author : 'Adik N.K.L'
	  		},
	  		{
	  			id : this.generate(),
	  			image : 'meetitem3.png',
	  			author : 'Zan DJ'
	  		},
  		];
  		localStorage.setItem('members', this.state)
	}
	
	s4() {
     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generate(){
  	return this.s4()+this.s4()+this.s4()+this.s4()+this.s4();
  }
  render() {
  	
  	let eleMember = this.state.map((member,index)=>{
  		return <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center" key={index}>
              	<div className="meetItem">
              		<img className="member" src={"./images/" + member.image} alt={member.author}/>              		
              		<div className="line">
              			<div className="line1"></div>
              		</div>
              		<p>{member.author}</p>
              		<label>
              			<a href={member.id}><img src="./images/meeticon.png" alt="..." /></a>
              			<a href={member.id}><img src="./images/meeticon1.png" alt="..." /></a>
              			<a href={member.id}><img src="./images/meeticon2.png" alt="..." /></a>
              			
              		</label>
              	</div>
              </div>
  	})
    return (
           <div className="row ">
              {eleMember}
            </div>
    );
  }
}

export default Meet;
