import React from 'react'
import './Rightbar.css';
import Online from '../online/Online';
import { Users } from '../../dummydata' ;

export default function Rightbar({ user }) {

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
        <>
          <div className="eventContainer">
            <img src={ PUBLIC_FOLDER + "/star.png"} alt="" className="starImage" />
            <span className="eventText">
              <b>フォロワー限定</b>イベント開催中！
            </span>
          </div>
          <img src={ PUBLIC_FOLDER + "/ad.jpeg"} alt="" className='eventImage' />
          <h4 className="rightbarTitle">オンラインの友達</h4>
          <ul className="rightbarFriendList">
            {Users.map((user) => (
              <Online user={user} key={user.id} />    
            ))}
          </ul>
          <div className="promotionTitle">プロモーション広告</div>
          <img src={ PUBLIC_FOLDER + "/promotion/promotion1.jpeg"} alt=""  className='rightbarPromotionImage'/>
          <p className="promotionName">ショッピング</p>
          <img src={ PUBLIC_FOLDER + "/promotion/promotion2.jpeg"} alt=""  className='rightbarPromotionImage'/>
          <p className="promotionName">カー</p>
          <img src={ PUBLIC_FOLDER + "/promotion/promotion3.jpeg"} alt=""  className='rightbarPromotionImage'/>
          <p className="promotionName">株式会社</p>
        </>  
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">出身:</span>
            <span className="rightbarInfokey">福岡</span>
          </div>
        </div>
        <h4 className="rightbarTitle">あなたの友達</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={ PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
          <div className="rightbarFollowing">
            <img src={ PUBLIC_FOLDER + "/person/2.jpeg"} alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
          <div className="rightbarFollowing">
            <img src={ PUBLIC_FOLDER + "/person/3.jpeg"} alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
          <div className="rightbarFollowing">
            <img src={ PUBLIC_FOLDER + "/person/4.jpeg"} alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
        </div>
        
      </>
    )
  }

  return  (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       { user ? <ProfileRightbar/> : <HomeRightbar /> }
      </div>
    </div>
  )


}

