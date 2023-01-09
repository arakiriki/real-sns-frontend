import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import "./Topbar.css"

export default function topbar() {
  return (
  <div className='topbarContainer'>
    <div className="topbarLeft">
      <span className="logo">real-sns</span>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className='searchIcon' />
        <input type="text" className='searchInput' placeholder='検索' />
      </div>
    </div>
    <div className="topbarRight">
      <div className="topbarIconItems">
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topbarImage'/>
      </div>
    </div>
  </div>

  )
}
