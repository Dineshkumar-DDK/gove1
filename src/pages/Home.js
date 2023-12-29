import React, { useCallback, useEffect, useState } from 'react'
import List from '../component/List'
import Search from '../component/Search'
function Home() {
  let [query,setQuery]=useState("");
  let [list,setList]=useState([]);
  const fetchData=useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>{setList(data)})
    
  },[])
  useEffect(()=>{
    fetchData()
  },[fetchData])
  const filteredData=list.filter(item=>{
    return (
      item.id.includes(query)||
      item.name.toLowerCase().includes(query.toLowerCase())||
      item.gender.toLowerCase().includes(query.toLowerCase())||
      item.position.toLowerCase().includes(query.toLowerCase())
    )
  })
  return (
    <div>
        <Search
        query={query}
        onQueryChange={myQuery=>setQuery(myQuery)} 
        />
        {
        filteredData.map((item)=>{
    
            return(            
            <List
            key={item.id}
            name={item.name}
            id={item.id}
            gender={item.gender}
            position={item.position}/>
            )
        })
        
    }
    
    </div>
  )
}

export default Home