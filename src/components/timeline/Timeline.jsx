import React from 'react'
import { useEffect,useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './Timeline.css';
// import { Posts } from '../../dummydata' ;
import axios from "axios";

export default function Timeline({ username }) {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = username 
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get(
        "/posts/timeline/63bbb4d5e52ba9939bbab63d"
      );
      setPosts(response.data);
    }
    fetchPosts();
  },[username]);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        { posts.map((post) => (
          <Post post={post} key={post._id} />
        )) }

      </div>
    </div>
  )
}
