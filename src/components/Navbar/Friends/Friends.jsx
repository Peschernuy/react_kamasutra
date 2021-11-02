import React from 'react';
import s from './Friends.module.css'
import NewFriend from "./NewFriend/NewFriend";


const Friends = (props) => {

let newFiends = props.state.sidebarMember.map(el => <NewFriend name={el.name} />);

  return (
    <div>
        {newFiends}

    </div>
  )
}

export default Friends;