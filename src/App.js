import React, { useState } from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteDetail from './components/AnecdoteDetail'
import About from './components/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
          <Route path="/about">
            <About />
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