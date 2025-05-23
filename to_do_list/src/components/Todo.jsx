import React from 'react'

const todo = ({ todo }) => {
  return (
    <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <div className="category">
                <p>({todo.category})</p>
              </div>
              <div>
                <button>Completar</button>
                <button>X</button>
              </div>
            </div>
          </div>
  )
}

export default todo
