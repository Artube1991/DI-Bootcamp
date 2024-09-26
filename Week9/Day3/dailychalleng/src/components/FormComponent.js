import { useState } from 'react';

const FormComponent = (props) => {
    // let { handlesubmit } = props;
    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [age, setAge] = useState(``);
    const [gender, setGender] = useState(``);
    const [destination, setDestination] = useState(``);
    const [dietary, setDietary] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        let data = event.target.getElementsByClassName('data');

        setFirstName(data.firstName.value);
        setLastName(data.lastName.value);
        setAge(data.age.value);
        setGender(data.gender.value);
        setDestination(data.destination.value);
    }
    

    return (
        <>
        <h1>Sample form</h1>
        <form onSubmit={handleChange}>
        <input className='data' type='text' name="firstName" placeholder='First Name'/> <br />
        <input className='data' type='text' name="lastName" placeholder='Last Name'/> <br />
        <input className='data' type='text' name="age" placeholder='Age'/> <br />
        <input className='data' type="radio" id="gender" name="gender" value="Male" />
        <label for="gender">Male</label> <br />
        <input className='data' type="radio" id="gender" name="gender" value="Female" />
        <label for="gender">Female</label><br />
        <label for="destination">Select your destination</label> <br/>
        <select className='data' id="destination" name="destination">
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
        </select> <br/>
        <input className='data' type="checkbox" id="Nuts Free" name="Nuts Free" value="Yes" />
        <label for="Nuts Free"> Nuts Free</label><br />
        <input className='data' type="checkbox" id="Lactose Free" name="Lactose Free" value="Yes" />
        <label for="Lactose Free"> Lactose Free</label><br />
        <input className='data' type="checkbox" id="Vegan" name="Vegan" value="Yes" />
        <label for="Vegan"> Vegan</label><br/>
        <button type='submit'>SUBMIT</button>
        </form>
        <h1>Entered Information:</h1>
        <p>Your name: {firstName} {lastName}</p>
        <p>Your age: {age}</p>
        <p>Your destination: {destination}</p>
        </>
    )
};

export default FormComponent;