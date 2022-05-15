import React, { useContext, useState } from 'react'
import { postCategory } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'
import { Button } from 'react-bootstrap';
const CategoryForm = () => {

  const [title, setTitle] = useState('')

  const {dispatch} = useContext(Store)

  const addCategory = async (e)=>{
    e.preventDefault()
    if(title){
      const category = {
        title
      }
      const response = await postCategory(category)
      const action = {
        type: 'create-category',
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
    <form className="m-2">
      <label htmlFor="category"></label>
      <input onChange={addingTitle} type="text" name="category" value={title}/>
      <Button className="m-2" onClick={addCategory} variant="success">Add category</Button>
    </form>
  )
}

export default CategoryForm
