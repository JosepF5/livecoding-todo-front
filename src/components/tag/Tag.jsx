import React from 'react'

const Tag = ({tag}) => {
  return (
    <div>
      <h1>{tag.description}</h1>
      <h1>{tag.noteId}</h1>
    </div>
  )
}

export default Tag
