import React, {useState} from 'react'

const initState = [`Bruce`, `Wayne`]

export const ArrayUseState = () => {

    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push(`Clark`)
        // persons.push(`Kent`)
        // setPersons(persons)

        // same thing as object, as long as the reference is the same, it won`t re render 
        const newPersons = [...persons]
        newPersons.push(`Clark`)
        newPersons.push(`Kent`)
        setPersons(newPersons)
    }
        
    console.log(`array state re-render`)
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}
