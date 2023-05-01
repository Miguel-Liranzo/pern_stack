import React from 'react'
import './css/Table.css'

const TableHeader = () => {
    return (
        <thead>
            <tr class='table-headings'>
                <th class='col1'>Name</th>
                <th class='col2'>URL</th>
                <th class='col3'>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.linkData.map((link, index) => {
        return (
            <tr key={index} class='table-headings'>
                <td class='col1'>{link.name}</td>
                <td class='col2'>
                    <a href={link.url}>{link.url}</a>
                </td>
                <td class='col3'>
                    <input class='submit' value='Remove' onClick={() => props.handleRemove(index)}></input>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}
 
const Table = (props) => {
    return (
        <table class='table'>
            <TableHeader />
            <TableBody linkData={props.linkData} handleRemove={props.removeLink}/>
        </table>
    )
}

export default Table