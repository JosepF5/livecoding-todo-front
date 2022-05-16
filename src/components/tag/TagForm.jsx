import React, { useContext, useState } from 'react'
import { Store } from '../../state/StoreProvider'
import { postTag } from '../../actions/tagActions/tagActions';
import { Button } from 'react-bootstrap';

const TagForm = ({note}) => {
  const {dispatch} = useContext(Store)
  const [title, setTitle] = useState('')

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
    <div className="m-5">
      <form > 
        <input onChange={addingTitle} type="text" name="Tag" placeholder="Tag" />
        <Button className="m-1" onClick={addTag} variant="success">Add Tag</Button>
      </form>
    </div>
  )
}

export default TagForm
