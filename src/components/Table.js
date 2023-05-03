import React, { Fragment, useEffect, useState } from 'react'
import './css/Table.css'

const TableHeader = () => {
    return (
        <Fragment>
            <thead>
                <tr className='table'>
                    <th className='col1'>Name</th>
                    <th className='col2'>URL</th>
                    <th className='col3'>Remove</th>
                </tr>
            </thead>
        </Fragment>
        
    )
}

const TableBody = (props) => {
    const [links, setLinks] = useState([])

    // Deleting links
    const deleteLink = async (id) => {
        try {
            const deleteLink = await fetch(`http://localhost:5000/links/${id}`, {
                method: 'DELETE'
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    // Getting links
    const getLinks = async () => {
        try {
            const response = await fetch('http://localhost:5000/links')
            const resData = await response.json()
            setLinks(resData)
        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect( () => {
        getLinks()
    }, [])
    
    // Creating rows based off those links
    const rows = links.map( (link) => {
        return (
            <Fragment>
                <tr key={link.id} className='table-headings'>
                    <td className='col1'>{link.name}</td>
                    <td className='col2'>
                        <a href={link.url}>{link.url}</a>
                    </td>
                    <td className='col3'>
                        <button className='submit' onClick={ () => deleteLink(link.id)}>Remove</button>
                    </td>
                </tr>
            </Fragment>
        )
    })

    // Returned rows
    return (
        <tbody>{rows}</tbody>
    )
}
 
const Table = () => {
    return (
        <Fragment>
            <table className='table'>
                <TableHeader />
                <TableBody />
            </table>
        </Fragment>
        
    )
}

export default Table