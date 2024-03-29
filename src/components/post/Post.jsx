import { MoreVert } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import './Post.css'
// import { Users } from '../../dummydata' ;
import axios from "axios";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';


export default function Post({ post }) {
  
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setLike(isLiked ? like -1 : like +1 );
    setIsLiked(!isLiked);
  }

  const [user, setUser] = useState({});

  useEffect(()=>{
    const feachUser = async () =>{
      const response = await axios.get(
        `/users?userId=${post.userId}`
      );
      setUser(response.data);
    }
    feachUser();
  },[post.userId]);

  // const user = Users.filter((user) => user.id === 1);

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="postProfileImage" />
            </Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{ format(post.createdAt) }</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{ post.desc }</span>
          <img src={PUBLIC_FOLDER + post.img } alt="" className='postImage' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={ PUBLIC_FOLDER + "/heart.png"} alt="likeIcon" onClick={() => handleLike()} className="likeIcon" />
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
