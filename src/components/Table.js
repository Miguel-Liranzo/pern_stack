import React, { Fragment, useEffect, useState } from 'react'
import './css/Table.css'


const Table = () => {
    const [links, setLinks] = useState([])
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
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map(link => (
                        <tr>
                            <td>{link.name}</td>
                            <td>{link.url}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </Fragment>
        
    )
}

export default Table