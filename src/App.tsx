import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Particles from 'react-particles-js'
import api from './services/api'
import './styles.css'


function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    if (input === '') {
      alert('Digite um CEP')
      return;
    }
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')


    } catch {
      alert('CEP não encontrado')
      setInput('')
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


      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP:{cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>


        </main>
      )}

    </div>


  )
}

export default App
