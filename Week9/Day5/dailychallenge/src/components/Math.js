import React from 'react';

const Math = (props) => {
    let { handleSubmit } = props
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="num1"
                    name="num1"
                    type="number"
                    min="0" max="10000"
                />
                <input
                    id="num2"
                    name="num2"
                    type="number"
                    min="0" max="10000"
                />
                <button type="submit">ADD</button>
            </form>
            </>

    )
}

export default Math

