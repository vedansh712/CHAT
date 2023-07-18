import React from 'react'
import './Feed.css'
import Text from './dispchat/Text'
import Post from './post/Post'

function Feed() {
    
  return (
    <div className='feed'>
        <div className="feed_left">
                <div className="feed_post">
                        <Post/>
                </div>
        </div>

        <div className="feed_right">
                <Text/>
        </div>
    </div>
  )
}

export default Feed