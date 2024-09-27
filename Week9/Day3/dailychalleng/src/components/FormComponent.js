import { useState } from 'react';

const FormComponent = () => {
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
        <div className='form'>
        <form>
        <input className='data' type='text' id='fn' name="firstName" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />  <br />
        <input className='data' type='text' id='ln' name="lastName" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} /> <br />
        <input className='data' type='text' id='ag' name="age" placeholder='Age' onChange={(e) => setAge(e.target.value)} /> <br /><br />
        <input className='data' type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
        <label for="gender">Male</label> <br />
        <input className='data' type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
        <label for="gender">Female</label><br />
        <label for="destination"><strong>Select your destination</strong></label> <br/>
        <select className='data' id="destination" name="destination" onChange={(e) => setDestination(e.target.value)}>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
        </select> <br/><br />
        <p><strong>Dietary restrictions:</strong></p>
        <input className='data' type="checkbox" id="Nuts Free" name="Nuts Free" value="Yes" onChange={(e) => handleChange()}/>
        <label for="Nuts Free"> Nuts Free</label><br />
        <input className='data' type="checkbox" id="Lactose Free" name="Lactose Free" value="Yes" onChange={(e) => handleChange()}/>
        <label for="Lactose Free"> Lactose Free</label><br />
        <input className='data' type="checkbox" id="Vegan" name="Vegan" value="Yes" onChange={(e) => handleChange()}/>
        <label for="Vegan"> Vegan</label><br/><br/><br/>
        <button type='submit'><strong>Submit</strong></button>
        </form>
        </div>
        <hr/>
        <div className='info'>
        <h2>Entered Information:</h2>
        <p>Your name: {firstName} {lastName}</p>
        <p>Your age: {age}</p>
        <p>Your gender: {gender}</p>
        <p>Your destination: {destination}</p>
        <p>**Nuts Free: {nuts}</p>
        <p>**Lactose Free: {lactose}</p>
        <p>**Vegan: {vegan}</p>
        </div>
        </>
    )
};

export default FormComponent;