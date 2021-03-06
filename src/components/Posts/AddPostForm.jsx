import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from '../../features/posts/postsSlice'
import { selectAllUsers } from '../../features/users/usersSlice'

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const users = useSelector(selectAllUsers)
    const dispatch = useDispatch()
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className='container form'>
            <form className='form__content'>
                <div>
                    <label for="name">Title: </label>
                    <input type="text" value={title} onChange={onTitleChanged} name="user_name" />
                </div>
                <select value={userId} onChange={onAuthorChanged}>
                    {usersOptions}
                </select>
                <div>
                    <label for="msg">Content: </label>
                    <textarea value={content} onChange={onContentChanged} name="user_message"></textarea>
                </div>

                <div class="button">
                    <button type='button' onClick={onSavePostClicked} disabled={!canSave}>Send your post</button>
                </div>
            </form>
        </section>
    )
}

export default AddPostForm