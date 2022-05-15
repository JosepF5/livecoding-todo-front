import React from 'react'
import { postTag } from '../../actions/tagActions/tagActions'

const TagForm = () => {

  return (
    <div className="m-5">
      <form > 
        <input onChange={postTag} type="text" name="tag" placeholder="tag"/>
      </form>
    </div>
  )
}

export default TagForm
