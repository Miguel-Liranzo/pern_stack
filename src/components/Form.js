import React from 'react'
import { useState } from 'react'
import './css/Form.css'

const Form = (props) => {
    const[name, setName] = useState('')
    const[URL, setURL] = useState('')

    const handleChange = (event) => {
        if (event.target.id === 'name') setName(event.target.value)
        else setURL(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name !== '' && URL !== '') {
            props.addLink(
                {
                    name: name, 
                    url: URL
                })
            setName('')
            setURL('')
        }
    }

    return ( 
        <form class='form'>
            <h2>Add New</h2>
            <label>Name</label>
            <input
                id='name'
                type='text'
                onChange={handleChange}
                value={name}
            />
            <label>URL</label>
            <input
                id='url'
                type='text'
                onChange={handleChange}
                value={URL}
            />
            <input
                id='submit'
                type='submit'
                value='Add'
                onClick={handleSubmit}
            />
        </form>
    )
}
export default Form