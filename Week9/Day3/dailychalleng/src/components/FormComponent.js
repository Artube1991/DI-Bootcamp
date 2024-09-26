import { useState } from 'react';

const FormComponent = (props) => {
    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [age, setAge] = useState(``);
    const [gender, setGender] = useState(``);
    const [destination, setDestination] = useState(``);
    const [nuts, setNuts] = useState('No');
    const [lactose, setLactose] = useState('No');
    const [vegan, setVegan] = useState('No');

    const handleChange = () => {
        let data = document.getElementsByClassName('data');
        // console.log(data);
        // let genderButtons = document.getElementsByName('gender');
        let nutsButton = document.getElementsByName('Nuts Free')[0];
        let lactoseButton = document.getElementsByName('Lactose Free')[0];
        let veganButton = document.getElementsByName('Vegan')[0];

        // setFirstName(data.firstName.value);
        // setLastName(data.lastName.value);
        // setAge(data.age.value);
        // setGender(data.gender.value);
        // setDestination(data.destination.value);

        // for (let genButton of genderButtons) {
        //     if (genButton.checked) {
        //         setGender(genButton.value);
        //     genButton.checked ? setGender(genButton.value) : setGender(genButton.value)
        //     }

        // if (nutsButton.checked) {
        //         setNuts(nutsButton.value);
        //         }
        // else {
        //     setNuts('No');
        // }
        
        nutsButton.checked === true ? setNuts('Yes') : setNuts('No')
        lactoseButton.checked === true ? setLactose('Yes') : setLactose('No')
        veganButton.checked === true ? setVegan('Yes') : setVegan('No')
        
        };
    

    return (
        <>
        <h1>Sample form</h1>
        <form>
        <input className='data' type='text' name="firstName" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />  <br />
        <input className='data' type='text' name="lastName" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} /> <br />
        <input className='data' type='text' name="age" placeholder='Age' onChange={(e) => setAge(e.target.value)} /> <br />
        <input className='data' type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
        <label for="gender">Male</label> <br />
        <input className='data' type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
        <label for="gender">Female</label><br />
        <label for="destination">Select your destination</label> <br/>
        <select className='data' id="destination" name="destination" onChange={(e) => setDestination(e.target.value)}>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
        </select> <br/>
        <input className='data' type="checkbox" id="Nuts Free" name="Nuts Free" value="Yes" onChange={(e) => handleChange()}/>
        <label for="Nuts Free"> Nuts Free</label><br />
        <input className='data' type="checkbox" id="Lactose Free" name="Lactose Free" value="Yes" onChange={(e) => handleChange()}/>
        <label for="Lactose Free"> Lactose Free</label><br />
        <input className='data' type="checkbox" id="Vegan" name="Vegan" value="Yes" onChange={(e) => handleChange()}/>
        <label for="Vegan"> Vegan</label><br/>
        <button type='submit'>SUBMIT</button>
        </form>
        <h1>Entered Information:</h1>
        <p>Your name: {firstName} {lastName}</p>
        <p>Your age: {age}</p>
        <p>Your gender: {gender}</p>
        <p>Your destination: {destination}</p>
        <p>Nuts Free: {nuts}</p>
        <p>Lactose Free: {lactose}</p>
        <p>Vegan: {vegan}</p>
        </>
    )
};

export default FormComponent;