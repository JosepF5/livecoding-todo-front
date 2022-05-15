import React, { useContext, useEffect } from 'react'
import { getAllCategories } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'
import Buscador from '../../components/navBar/Buscador'
import Category from './Category'
import CategoryForm from './CategoryForm'

const CategoryList = () => {

  const {state, dispatch} = useContext(Store)

  useEffect(()=>{
    getAllCategories().then(categories => {
      const action = {
        type: 'get-categories',
        payload: categories
      }
      dispatch(action)
    })
  }, [])

  return (
    <div>
      <Buscador categoryList={state.categoryList}/>
    </div>
  )
}

export default CategoryList
