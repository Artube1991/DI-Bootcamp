interface Ucard {
    myName: string;
    myAge: number;
}

const UserCard: React.FC<Ucard> = ( { myName, myAge }, ) => {
    if(typeof myName === "undefined" && typeof myAge === "undefined") {
        return <p>Sorry, we don't know your name and age and cannot show you the UserCard.</p>
    }
    return (
        <div className="UserCard">
        <h2>Hi, this is me again - {myName}.</h2>
        <p>I just forgot to say that I'm only {myAge} years old.</p>
            </div>
    )
}

export default UserCard