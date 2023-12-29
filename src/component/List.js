import React from 'react'

function List({name,gender,id,position}) {
  return (
    <div>
    
        <ul>
            <h1>Details of {name}</h1>
            <li>gender:{gender}</li>
            <li>id:{id}</li>
            <li>position:{position}</li>
        </ul>
    </div>
  )
}

export default List