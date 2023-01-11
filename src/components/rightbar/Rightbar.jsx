import React from 'react'
import './Rightbar.css';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="./assets/star.png" alt="" className="starImage" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src="./assets/ad.jpeg" alt="" className='eventImage' />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="./assets/person/1.jpeg" alt="" className='rightbarProfileImage'/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">arakiriki</span>
          </li>
        </ul>
        <div className="promotionTitle">プロモーション広告</div>
        <img src="./assets/promotion/promotion1.jpeg" alt=""  className='rightbarPromotionImage'/>
        <p className="promotionName">ショッピング</p>
        <img src="./assets/promotion/promotion2.jpeg" alt=""  className='rightbarPromotionImage'/>
        <p className="promotionName">カー</p>
        <img src="./assets/promotion/promotion3.jpeg" alt=""  className='rightbarPromotionImage'/>
        <p className="promotionName">株式会社</p>
      </div>
    </div>
  )
}
