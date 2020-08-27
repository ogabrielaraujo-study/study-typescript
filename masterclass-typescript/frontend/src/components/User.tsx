import React from 'react'

interface IUser {
  name: string
  email: string
}

interface Props {
  user: IUser
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name}
      <i>Email: </i> {user.email}
    </div>
  )
}

export default User
