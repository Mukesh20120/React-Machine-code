import React from 'react'
import { useLocalStorage, useSessionStorage } from './useStorage'

function StorageComponent() {
    const [name,setName,removeName] = useLocalStorage('name','ravi');
    const [age,setAge,removeAge] = useSessionStorage('age',24);
  return (
    <div>
      <div>{name}-{age}</div>
      <div>
        <button onClick={()=>{setName('Ram')}}>setName</button>
        <button onClick={()=>{setAge(26)}}>setAge</button>
        <button onClick={removeName}>removeName</button>
        <button onClick={removeAge}>removeAge</button>
      </div>
    </div>
  )
}

export default StorageComponent
