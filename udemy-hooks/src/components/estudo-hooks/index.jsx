import React, {useState} from 'react'

const ManageDate = () => {

  const [nome, setNome] = useState(87);

  return (
    <div>
      <p>Valor para mudar: {nome}</p>
      <button onClick={ () => (setNome(35))}>Mudar State</button>
    </div>
  )
}

export default ManageDate