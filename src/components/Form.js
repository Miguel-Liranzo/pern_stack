import React, { Fragment, useState } from 'react'
import './css/Form.css'

const Form = (props) => {
    const[name, setName] = useState('')
    const[URL, setURL] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const jsonBody = {
                name: name,
                url: URL
            }
            const response = await fetch('http://localhost:5000/links', {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(jsonBody)
            })

            console.log(response)
            setName('')
            setURL('')
    }   catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <form className='form'>
                <h2>Add New</h2>
                <label>Name</label>
                <input
                    id='name'
                    type='text'
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                <label>URL</label>
                <input
                    id='url'
                    type='text'
                    onChange={event => setURL(event.target.value)}
                    value={URL}
                />
                <button
                    id='submit'
                    type='submit'
                    onClick={handleSubmit}>
                        Add
                </button>
            </form>  
        </Fragment>
        
    )
}
export default Form