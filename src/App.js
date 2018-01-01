import React from 'react';


class App extends React.Component {
  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App