import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import './Post.css'
import { Users } from '../../dummydata' ;

export default function Post({ post }) {
  
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setLike(isLiked ? like -1 : like +1 );
    setIsLiked(!isLiked);
  }

  // const user = Users.filter((user) => user.id === 1);

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} alt="" className="postProfileImage" />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="postDate">{ post.date }</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{ post.desc }</span>
          <img src={ post.photo } alt="" className='postImage' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" alt="likeIcon" onClick={() => handleLike()} className="likeIcon" />
            <span className="postLikeCounter">{like}人がlikeをしました。</span>
          </div>
          <div className="postBottomLeft">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}
