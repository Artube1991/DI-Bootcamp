interface GreetingIF {
    myName: string
}

const Greeting: React.FC<GreetingIF> = ( { myName }) => {
    return <h1>Hello! My name is {myName}, and this is my first React + TS Project!</h1>
}

export default Greeting