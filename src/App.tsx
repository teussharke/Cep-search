import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import api from './services/api'
import './styles.css'


function App() {

  const [input, setInput] = useState('')

  async function handleSearch() {
    if (input === '') {
      alert('Digite um CEP')
      return;
    }
    try {
      const response = await api.get(`${input}/json`)

    } catch {
      alert('CEP não encontrado')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="container_input">
        <input
          type="text"
          placeholder="Digite o seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>



      <main className='main'>
        <h2>CEP: 36052150</h2>

        <span>Rua Augusto Alves</span>
        <span>Complemento: ALgum complemento</span>
        <span>Grajau</span>
        <span>Juiz de Fora - MG</span>


      </main>
    </div>


  )
}

export default App
