import React, { Component } from 'react';
import Menu__header from './Components/Menu_header';
import Logo from './Components/Logo';
import Search from './Components/Search';
import Whatwedo from './Components/Whatwedo';
import Menu_tab from './Components/Menu_tab';
import CarouselTestimonials from './Components/CarouselTestimonials'
import Brand from './Components/Brand';
import Meet from './Components/Meet';
import ListPorts from './Components/ListPorts';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu : 'Home',
      isActiveMenuTab : 'Photography'
    }
  }
  onChangeColor =(value) =>{
    this.setState({
      isActiveMenuTab : value
    })
  }
  setActiveMenu = (value) => {
    this.setState({
      menu : value
    });
  }
  render() {

    var whatwedos = [
      {
        image: './images/icon.png',
        title: 'Lorem Ipsum',
        content: 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor',
      },
      {
        image: './images/icon1.png',
        title: 'Lorem Ipsum',
        content: 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor',
      },
      {
        image: './images/icon2.png',
        title: 'Lorem Ipsum',
        content: 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor',
      },
    ];
    let eleWhats = whatwedos.map((whatwedo,index)=>{
      return <Whatwedo key={index}  image={whatwedo.image} title={whatwedo.title} content={whatwedo.content} />
    })
    return (
      <div className="wraper">
        <header>
          <div className="container-fuild">
            <div className="row">
              <Menu__header active={this.state.menu} setActive = {  this.setActiveMenu }/>
              <Logo />
              <Search />
            </div>
          </div>
        </header>

        <div className="banner">
          <div className="banner__content text-center">
            <h1>Art Eternal Happiness</h1>
            <a href="#" className="click">work with us</a>
          </div>
        </div>

        <section id="whatwedo">
          <div className="row">
            <div className="col-12">
              <div className="content-sec1">
                <h2>what we do</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>

          <div className="row pl-5 pr-5">
            {eleWhats}
          </div>
        </section>

        <section id="ourLatest">
          <div className="row">
            <div className="col-12">
              <div className="content-sec1">
                <h2>our latest work</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
          <div className="row ">
            <Menu_tab active={this.state.isActiveMenuTab} onChangeColor={this.onChangeColor}/>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="btnOurLatest text-center">
                <a href="">View More Work <span className="ml-3"><i className="fa fa-arrow-right" aria-hidden="true"></i></span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content-sec1">
                  <h2>testimonials</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="comment text-center">
                  
                    <CarouselTestimonials />
                
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="happyClient">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content-sec1">
                  <h2>our happy client</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
              <Brand />
            <div className="row text-center">
              <div className="col-12">
                <div className="btnHappyClient">
                  <a href="">See all client <span className="ml-2"><i className="fa fa-arrow-right" aria-hidden="true"></i></span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="meet">
          <div className="contentMeet">
            <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content-sec1">
                  <h2>meet the team</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <Meet />

          </div>
          </div>
          <div className="btnMeet">
              <a href="">work with us</a>
            </div>

        </section>

        <section id="contact">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4col-xl-4 text-center">
                <h3>about us</h3>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Ut aliquam massa nisl quis neque. Suspendisse in orci enim.Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                <label>
                    <a href=""><img src="./images/meeticon.png" alt="..." /></a>
                    <a href=""><img src="./images/meeticon1.png" alt="..." /></a>
                    <a href=""><img src="./images/meeticon2.png" alt="..." /></a>
                </label>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4col-xl-4 ">
                <h3 className="text-center">recent ports</h3>
                <ListPorts />
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4col-xl-4 ">
                <h3 className="text-center">contact us</h3>
                <div className="contact__content">
                  <p>10044 West 23th Street, Suite 721<br /></p>
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
