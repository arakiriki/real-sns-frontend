import React, { useState, useEffect } from 'react'
import './Profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(()=>{
    const feachUser = async () =>{
      const response = await axios.get(
        `/users?username=${username}`
      );
      setUser(response.data);
    }
    feachUser();
  },[]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRughtTop">
            <div className="profileCover">
              <img src={ user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className="profileCoverImage" />
              <img  src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="profileUserImage" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoname">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Timeline  username={username}/>
            <Rightbar  user={user}/>    
          </div>
        </div>
      </div>
    </>
  )
}
