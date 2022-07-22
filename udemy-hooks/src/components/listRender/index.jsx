import React, {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Marcelo", "Marconi", "Maciel", "Manoel"])
    const [users, setUsers] = useState([
      {id: 1, nome:'Marcelo', age: 34},
      {id: 2, nome:'Manoel', age: 24},
      {id: 3, nome:'Maciel', age: 28}
    ])
    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);
      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
              <li key={user.id}>{user.nome} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete User</button>
    </div>
  )
}

export default ListRender