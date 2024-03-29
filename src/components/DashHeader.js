import React from 'react'
import {NavLink} from 'react-router-dom';
// import {connect} from 'react-redux';

import '../styles/dashHeader.css'
 const DashHeader = (props)=>{
    
    return (
      <nav className = "DashboardNav fixed-top">
      <NavLink to = "/"><h3 className = "landing-name">B I L L S P L I T</h3></NavLink> 
     <div className = "Dashfloat">
      <img className = "profile" src={require('../images/person-profile.png')} alt="" srcset=""/>
      {/* <label htmlFor="">{props?.user?.username}</label> */}
     </div>
    </nav>
    )
}

// const mapStateToProps = state => {
//   console.log("state is  ", state);
//   return {
//     user: state.user
//   };
// };

// const fn = connect(mapStateToProps);
export default DashHeader;

