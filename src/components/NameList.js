import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Mayank', 'Abhinav', 'Sandeepa']
    // const namesList = names.map(name => <h2>{name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Abhinav',
            age: 20,
            skill: 'cloud'
        },
        {
            id: 2,
            name: 'Mayank',
            age: 22,
            skill: 'gaming'
        },
        {
            id: 3,
            name: 'Sandeepa',
            age: 25,
            skill: 'dance'
        }
    ]

    const personsList = persons.map(person => <Person key={person.id} person={person} />)

    // const names = ['Mayank', 'Abhinav', 'Sandeepa', 'Mayank']
    // const namesList = names.map((name, index) => <h2 key={index}>{index}-{name}</h2>)

    return (
        <div>
            {personsList}
            {/* {namesList} */}
        </div>
    )
}

export default NameList
