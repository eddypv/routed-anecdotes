import { useParams } from "react-router"

const AnecdoteDetail = ({getAnecdote})=>{
  const anecdoteId = useParams().id
  const anecdote = getAnecdote(anecdoteId)
  if(anecdote){
    return(
      <div>
        <h2>{anecdote.content} by {anecdote.author}</h2>
        <p>Has {anecdote.votes} votes</p>
        <p>for more info see <a href={anecdote.info}>{anecdote.info}</a> </p>
      </div>
    ) 
  }else{
    return(
    <div>
      <h2>Not found anecdote</h2>
    </div>)
  }
  
}
export default AnecdoteDetail