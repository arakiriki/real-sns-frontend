import React from 'react'


export default function Online({ user }) {

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImageContainer">
      <img src={ PUBLIC_FOLDER + user.profilePicture} alt="" className='rightbarProfileImage'/>
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  )
}
