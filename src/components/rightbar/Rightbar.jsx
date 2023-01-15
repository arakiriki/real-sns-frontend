import React from 'react'
import './Rightbar.css';
import Online from '../online/Online';
import { Users } from '../../dummydata' ;

export default function Rightbar({ profile }) {


  const HomeRightbar = () => {
    return (
        <>
          <div className="eventContainer">
            <img src="./assets/star.png" alt="" className="starImage" />
            <span className="eventText">
              <b>フォロワー限定</b>イベント開催中！
            </span>
          </div>
          <img src="./assets/ad.jpeg" alt="" className='eventImage' />
          <h4 className="rightbarTitle">オンラインの友達</h4>
          <ul className="rightbarFriendList">
            {Users.map((user) => (
              <Online user={user} key={user.id} />    
            ))}
          </ul>
          <div className="promotionTitle">プロモーション広告</div>
          <img src="./assets/promotion/promotion1.jpeg" alt=""  className='rightbarPromotionImage'/>
          <p className="promotionName">ショッピング</p>
          <img src="./assets/promotion/promotion2.jpeg" alt=""  className='rightbarPromotionImage'/>
          <p className="promotionName">カー</p>
          <img src="./assets/promotion/promotion3.jpeg" alt=""  className='rightbarPromotionImage'/>
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
            <img src="./assets/person/1.jpeg" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
          <div className="rightbarFollowing">
            <img src="./assets/person/2.jpeg" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
          <div className="rightbarFollowing">
            <img src="./assets/person/3.jpeg" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
          <div className="rightbarFollowing">
            <img src="./assets/person/4.jpeg" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">arakiriki</span>
          </div>  
        </div>
        
      </>
    )
  }

  return  (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       { profile ? <ProfileRightbar/> : <HomeRightbar /> }
      </div>
    </div>
  )


}

