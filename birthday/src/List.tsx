import React from 'react'
import { People } from './People';

//define type of people
type ListProps = {
  people: People[]
}


function List(people: ListProps) {
  console.log(people);
  return (
    <>
      {people.people.map(({id, name, age, image})=>{
        //Destructure the object
        // const {id, name, age, image} = person;
        return (
          <article key={id} className="w-18 h-18 grid grid-cols-2 gap-x-0.025">
            <img src={image} alt={name} className="rounded-full w-12 h-12" />
            <div className="p-2 grid gap-y-0.25" >
              <h2 className="">Name: {name}</h2>
              <h2>Age: {age} years</h2>
            </div>
          </article>
          
        )
      })
      }
      
    </>
  )
}

export default List