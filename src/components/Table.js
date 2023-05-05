import React, { Fragment, useEffect, useState } from 'react'
import './css/Table.css'
import EditButton from './EditButton'


const Table = () => {
    const [links, setLinks] = useState([])

    const deleteLink = async (id) => {
        try {
            const deleteLink = await fetch(`http://localhost:5000/links/${id}`, {
                method: 'DELETE'
            })
            const jsonData = await deleteLink.json()
            console.log(jsonData)
            setLinks(links.filter( (link) => link.id !== id))
            getLinks()
        } catch (err) {
            console.error(err.message)
        }
    }

    const getLinks = async () => {
        try {
            const response = await fetch('http://localhost:5000/links')
            const jsonData = await response.json()
            setLinks(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect( () => {
        getLinks();
    }, [])
    return (
        <Fragment>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map(link => (
                        <tr key={link.id}>
                            <td>{link.name}</td>
                            <td>
                                <a href={link.url}>{link.name}</a>
                            </td>
                            <td>
                                <button className="delete" onClick={ () => deleteLink(link.id) }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default Table