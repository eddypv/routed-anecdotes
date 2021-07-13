import React, { useState } from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteDetail from './components/AnecdoteDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'




const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')
  const addNew = (anecdote) => {
    
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`a new anecdote "${anecdote.content}" created!`)
    

  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  /*return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <AnecdoteList anecdotes={anecdotes} />
      <About />
      <CreateNew addNew={addNew} />
      <Footer />
    </div>
  )*/
  return(
    <div>
      <h1>Software anecdotes</h1>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/create">
            <NewAnecdote addNew={addNew} />
          </Route>
          <Route path="/anecdotes/:id">
            <AnecdoteDetail anecdotes={anecdotes} />
          </Route>
          <Route path="/"> 
            <AnecdoteList anecdotes={anecdotes} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  ) 
}

export default App;