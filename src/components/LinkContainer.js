import { useState } from 'react'
import Table from './Table'
import Form from './Form'
import './css/LinkContainer.css'

const LinkContainer = () => {
    const [favLinks, setFavLinks] = useState([])

    const handleRemove = (index) => { 
        setFavLinks(
            favLinks.filter( (e, i) => { 
                return i !== index
            })  
        ) 
    }

    const handleSubmit = (favLink) => {
        setFavLinks(
            favLinks.concat(favLink)
        )
    }   
 
    return (  

        <div class='linkContainer'> 
            <h1>My Favorite Links</h1>
            <p>Add a new URL with a name and link to table.</p>
            <Table linkData={favLinks} removeLink={handleRemove}/>
            <br />
            <Form addLink={handleSubmit}/>
        </div>
    )
}



export default LinkContainer