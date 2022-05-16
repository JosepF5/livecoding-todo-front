import React, {useState } from 'react'
import Tag from '../../components/tag/Tag'
import Category from '../../components/category/Category'
import CategoryForm from '../../components/category/CategoryForm'
function Buscador({categoryList}) {   
  const [value, setValue] = useState('')
  let tagToAdd=null
  const addingValue = (e) => {
    setValue(e.target.value)
  }
  const compareValue = (tagToAdd) => {
        const nuevaLista=categoryList.map(category =>
            category.notes.map(note =>
            note.tags.filter(tag =>{
                return tag.description===value?true:false;
        })))
        const newList = categoryList.find(c => c.notes.find(n=>n.tags.find(t=>t.description===value)))
        const tagsList=[]
        nuevaLista.forEach(category =>category.forEach(notas =>notas.forEach(tags =>tagsList.push(tags))))
        if(newList!==undefined){
            const noteToAddTask = newList.notes.find(n=>n.tags.find(t=>t.description===value))
            tagToAdd = noteToAddTask.tags.find(t=>t.description===value)
            console.log(tagToAdd)
        }
        return tagsList
    }
const etiquetasList=compareValue(tagToAdd)
  return (
    <div className="m-5">
      <div className="m-5">
      <h1>Buscador</h1>
      <input onChange={addingValue} type="text" value={value} name="search" placeholder="Buscar"/>
      </div>
      <div className="m-2">
        <h1>Hello from category list</h1>
        <CategoryForm />
        {
        (value===''?(categoryList.map(category => <Category key={category.id}category={category} />)):
        (etiquetasList.map(tags => <Tag key={tags.id}tag={tags}/>)))
        }
      </div>
    </div>
  )
}

export default Buscador
