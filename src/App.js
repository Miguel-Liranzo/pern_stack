import './App.css'
import React, { Fragment } from 'react'
import Table from './components/Table.js'
import Form from './components/Form.js'

function App() {
  return (
    <Fragment>
        <div className='App'> 
            <h1>My Favorite Links</h1>
            <p>Add a new URL with a name and link to table.</p>
            <Form />
            <br />
            <Table />
        </div>
    </Fragment>
  )
}

export default App
