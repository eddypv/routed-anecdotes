import { useState } from "react"
import { useHistory } from 'react-router'
import { useField } from "../hooks"

const NewAnecdote = (props) => {
  const history = useHistory()
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content:content.value,
      author:author.value,
      info:info.value,
      votes: 0
    })
    history.push('/')

  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content.value} onChange={content.onChange} type={content.type} />
        </div>
        <div>
          author
          <input name='author' value={author.value} onChange={author.onChange} type={author.type} />
        </div>
        <div>
          url for more info
          <input name='info' value={info.value} onChange={info.onChange} type={info.type} />
        </div>
        <button>create</button>
      </form>
    </div>
  )

}

export default NewAnecdote