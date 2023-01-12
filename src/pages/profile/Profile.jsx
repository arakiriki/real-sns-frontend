import React from 'react'
import './Profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRughtTop">
            <div className="profileCover">
              <img src="./assets/post/3.jpeg" alt="" className="profileCoverImage" />
              <img src="./assets/person/1.jpeg" alt="" className="profileUserImage" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoname">arakiriki</h4>
                <span className="profileInfoDesc">testddddfasdfasfjkdsajkfasjl</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar />    
          </div>
        </div>
      </div>
    </>
  )
}
