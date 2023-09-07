import { useEffect, useRef, useState } from "react"

interface User {
  email: string,
  city: string,
  name: string
}
interface FechtedUser {
  email: string,
  address: {
    city: string
  }
  name: string
}
const UserCards = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const countRef = useRef(0)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      let data = await res.json()
      data = data.map((person: FechtedUser) => ({ email: person.email, name: person.name, city: person.address.city }))
      setUsers(data)
    }
    getData()
  }, [])


  return (
    <>
      user click count : {countRef.current}
      {users.map((user, index) => {
        return (
          <UserCard
          key={index}
            user={user}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            countRef={countRef}
          />)
      })}
    </>
  )
}
type UserCardProps = {
  user: User,
  setSelectedIndex: (value: React.SetStateAction<number>) => void,
  countRef: React.MutableRefObject<number>,
  selectedIndex: number,
  index: number
}

function UserCard(props: UserCardProps) {
  const { user, selectedIndex, setSelectedIndex, countRef, index } = props
  const { name, email, city } = user
  return (
    <div
      style={
        {
          border: "solid 1px red",
          backgroundColor: selectedIndex === index ? "yellow" : "white"
        }
      }
      key={index}
      onClick={() => {
        setSelectedIndex(index)
        countRef.current++
      }
      }>
      <div>{name} </div>
      <div>{email} </div>
      <div>{city} </div>
    </div>
  )
}


export default UserCards