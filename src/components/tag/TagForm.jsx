import React from 'react'
import { postTag } from '../../actions/tagActions/tagActions'

const TagForm = () => {

  return (
    <div>
      <form>
        <input onChange={postTag} type="text" name="tag" placeholder="tag"/>
      </form>
    </div>
  )
}

export default TagForm
