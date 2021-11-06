import React from 'react';
import { postsData } from '../container/PostContainer';

const PostCard = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {postsData.map((post, index) => (
            <div key={index}>
              {post.title}, {post.excerpt}
            </div>
          ))}
        </div>
      </div>
  )
}

export default PostCard
