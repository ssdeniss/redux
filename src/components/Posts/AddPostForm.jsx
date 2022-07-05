import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from '../../features/posts/postsSlice'

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }

    return (
        <section className='container form'>
            <form className='form__content'>
                <div>
                    <label for="name">Title: </label>
                    <input type="text" value={title} onChange={onTitleChanged} name="user_name" />
                </div>

                <div>
                    <label for="msg">Content: </label>
                    <textarea value={content} onChange={onContentChanged} name="user_message"></textarea>
                </div>

                <div class="button">
                    <button type='button' onClick={onSavePostClicked}>Send your post</button>
                </div>
            </form>
        </section>
    )
}

export default AddPostForm