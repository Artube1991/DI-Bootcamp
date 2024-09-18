import { useState } from 'react';

const FormComponent = (props) => {
    let { handlesubmit } = props;
    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [age, setAge] = useState(``);
    const [gender, setGender] = useState(``);
    const [destination, setDestination] = useState(``);
    const [dietary, setDietary] = useState([]);

    return (
        <>
        <h1>Sample form</h1>
        <form onSubmit={handlesubmit}>
        <input className='data' type='text' placeholder='First Name'/> <br />
        <input className='data' type='text' placeholder='Last Name'/> <br />
        <input className='data' type='text' placeholder='Age'/> <br />
        <input type="radio" id="male" name="male" value="Male" />
        <label for="male">Male</label> <br />
        <input type="radio" id="female" name="female" value="Female" />
        <label for="female">Female</label><br />
        <label for="cars">Select your destination</label> <br/>
        <select id="destination" name="destination">
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
        </select> <br/>
        <input type="checkbox" id="dietary1" name="dietary1" value="Nuts Free" />
        <label for="Nuts Free"> Nuts Free</label><br />
        <input type="checkbox" id="dietary2" name="dietary2" value="Lactose Free" />
        <label for="dietary2"> Lactose Free</label><br />
        <input type="checkbox" id="dietary3" name="dietary3" value="Vegan" />
        <label for="dietary3"> Vegan</label><br/>
        <button type="submit">SUBMIT</button>
        </form>
        </>
    )
};

export default FormComponent;