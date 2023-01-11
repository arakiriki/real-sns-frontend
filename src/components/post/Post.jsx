import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="./assets/person/1.jpeg" alt="" className="postProfileImage" />
            <span className="postUsername">arakiriki</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNSを自作中</span>
          <img src="./assets/post/1.jpeg" alt="" className='postImage' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" alt="likeIcon" />
            <span className="postLikeCounter">５人がlikeをしました。</span>
          </div>
          <div className="postBottomLeft">
            <span className="postCommentText">4コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}
