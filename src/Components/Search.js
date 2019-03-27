import React, { Component } from 'react';



class Search extends Component {
  render() {

    return (
           <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
                <div className="search text-right mr-3 mt-2">
                  <form action="" method="post">
                  	<input type="text" name="search" placeholder="Search..."/>
                  	<span><i className="fa fa-search" aria-hidden="true"></i></span>
                  </form>
                </div>
              </div>
    );
  }
}

export default Search;
