import React from 'react'
import Tag from './Tag'

const TagList = ({note}) => {
  return (
    <div className="m-5">
      {note.map(n=><Tag key={n.id} tag={n}/>)}
    </div>
  )
}

export default TagList
