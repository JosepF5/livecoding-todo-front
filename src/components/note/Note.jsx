import React, { useContext, useState } from 'react'
import { deleteNote, putNote } from '../../actions/noteActions/noteActions';
import { Store } from '../../state/StoreProvider';
import TagList from '../tag/TagList';
import { postTag } from '../../actions/tagActions/tagActions';
import { Button } from 'react-bootstrap';
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
    <div className="m-2">
      <div>
        <h1 style={note.done?{'textDecoration': 'line-through'}:{}}>{note.message}</h1>
        <input onChange={onCheckbox} type="checkbox" checked={note.done} />
      </div>
      <div>
          <input onChange={addingTitle} type="text" name="Tag" placeholder="Tag" />
          <Button className="m-1" onClick={addTag} variant="success">Add Tag</Button>
          <TagList note={note.tags}></TagList>
      </div>
      <Button className="m-1" onClick={() => onDeleteNote(note.id)} variant="danger">Delete Note</Button>
      <Button className="m-1" onClick={editNote} variant="warning">Edit Note</Button>
    </div>
  )
}

export default Note
