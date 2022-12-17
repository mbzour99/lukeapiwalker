import React, { useEffect } from 'react';
// import axios from 'axios';
import { navigate } from '@reach/router';

const Luke = (props) => {

    const { inputs, setInputs } = props;

    const idChange = (event) => {
        setInputs({ ...inputs, id: event.target.value })
    }

    const resourceChange = (event) => {
        setInputs({ ...inputs, resource: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputs({ ...inputs, resource: event.target.resource.value, id: event.target.id.value });
        navigate(`/${inputs.resource}/${inputs.id}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="resource">Search for:</label>
                <select name="resource" id="resource" onChange={resourceChange}>
                    <option value="" disabled>Please select resource:</option>
                    <option value="people">People</option>
                    <option value="planets" >Planets</option>
                    <option value="starships" >Starships</option>
                    <option value="vehicles" >Vehicles</option>
                    <option value="species">Species</option>
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" name="id" id="id" onChange={idChange} value={inputs.id} />
                <button>Search</button>
            </form>
        </>
    )
}

export default Luke;