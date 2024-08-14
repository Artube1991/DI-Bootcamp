interface Ucard {
    myName: string,
    age: number
}

const UserCard: React.FC<Ucard> = ( { myName }) => {
    return <h1>Hello! My name is {myName}, and this is my first React + TS Project!</h1>
}

export default UserCard