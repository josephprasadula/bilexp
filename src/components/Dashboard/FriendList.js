import React, {useEffect, useState} from "react";
// import { connect } from "react-redux";

const FriendList = props => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('localHost:8000//participants').then(
      data => setFriends(JSON.parse(data))
    ).catch(err => console.log('error',err))
  },[])
  return (
    <ul>
      {/* {console.log(props.user.friends[5])} */}

      {(friends ?? [{name:'a' },{ name: 'b'}])?.map(value =>  <li className="friendlist">
        <i class="fas fa-user" />
        <span>{value?.name}</span>
      </li>)}
      
    </ul>
  );
};

// const mapStateToProps = state => {
//   console.log("state is  ", state);
//   return {
//     user: state.user
//   };
// };

// const fn = connect(mapStateToProps);
export default FriendList;
