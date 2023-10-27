import React from 'react'

export default function First(props) {
  return (
    <div>
       <h1>This is the first component </h1>
       <h2> Component created by {props.name}</h2> 
    </div>
  )
}
