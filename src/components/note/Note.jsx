import React, { useContext, useState } from 'react'
import { deleteNote, putNote } from '../../actions/noteActions/noteActions';
import { Store } from '../../state/StoreProvider';
import TagList from '../tag/TagList';
import { postTag } from '../../actions/tagActions/tagActions';

const Note = ({note}) => {

  const {dispatch} = useContext(Store)
  const [title, setTitle] = useState('')

  const onCheckbox = async (e)=> {
    const checked = e.currentTarget.checked;
    const noteWithCheckbox = {...note, done: checked}
    const response = await putNote(noteWithCheckbox)
    const action = {
      type: 'update-note',
      payload: response
    }
    dispatch(action)
  }

  const onDeleteNote = async (id) => {
    const response = await deleteNote(id);
    if(response.status === 200){
      const action = {
        type: 'delete-note',
        payload: note
      }
      dispatch(action)
    }
  }

  const editNote = ()=>{
    const action = {
      type: 'add-note-to-be-updated',
      payload: note
    }
    dispatch(action)
  }

  const addTag = async (e)=>{
    e.preventDefault()
    if(title){
      const category = {
        description:title,
        noteId:note.id
      }
      const response = await postTag(category)
      const action = {
        type: 'create-tag',
        payload: response
      }
      dispatch(action)
      setTitle('')
    }
  }

  const addingTitle = (e)=>{
    setTitle(e.target.value)
  }

  return (
    <div>
      <h1 style={note.done?{'textDecoration': 'line-through'}:{}}>{note.message}</h1>
      <input onChange={onCheckbox} type="checkbox" checked={note.done} />
      <div>
          <input onChange={addingTitle} type="text" name="Tag" placeholder="Tag" />
          <button onClick={addTag}>Add Tag</button>
          <div ><TagList note={note.tags}></TagList></div>
      </div>
      <button onClick={() => onDeleteNote(note.id)}>delete note</button>
      <button onClick={editNote}>edit note</button>
    </div>
  )
}

export default Note
