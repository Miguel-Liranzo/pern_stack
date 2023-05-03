import React, { Fragment, useState } from 'react'
import './css/Form.css'

const Form = () => {
    const[name, setName] = useState('')
    const[URL, setURL] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                url: URL
            })
        }
        try {
            const response = await fetch('http://localhost:5000/links', requestOptions)
                                    .then(response => response.json())
            console.log(response)
            setName('')
            setURL('')
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <form className='form' onSubmit={handleSubmit}>
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
                    type='submit'>
                        Add
                </button>
            </form>  
        </Fragment>
    )
}
export default Form