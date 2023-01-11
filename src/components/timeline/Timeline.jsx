import React from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import './Timeline.css';
import { Posts } from '../../dummydata' ;

export default function Timeline() {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        { Posts.map((post,index) => (
          <Post post={post} key={index} />
        )) }

      </div>
    </div>
  )
}
