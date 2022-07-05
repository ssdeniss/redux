import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../features/posts/postsSlice'
import PostAuthor from './PostAuthor'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <PostAuthor userId={post.userId} />
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))
    return (
        <section className='container posts'>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList