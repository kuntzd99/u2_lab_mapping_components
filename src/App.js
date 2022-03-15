import React from 'react'
import './App.css'
import contacts from './data/contacts.json'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <ul>
        {contacts.results.map((contact) => (
          <Contact
            key={contact.name.first + contact.name.last}
            first={contact.name.first}
            last={contact.name.last}
            thumbnail={contact.picture.thumbnail}
            phone={contact.phone}
            cell={contact.cell}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
