import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link } from '@reach/router';

const LukeData = (props) => {

    const { resource, id } = props;
    const { data, setData } = props;
    const [homeworld, setHomeworld] = useState(false)
    const [errors, setErrors] = useState(0)

    const getHomeworld = (incoming) => {
        axios.get(`${incoming.homeworld}`)
            .then((response) => { setHomeworld([response.data]); })
            .catch((error) => { })
    }
    
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${resource}/${id}`)
            .then((response) => { setData(response.data); getHomeworld(response.data); setErrors(0) })
            .catch((error) => { if (error) { setErrors(1); } })
    }, [resource, id]);


    let link = `/planets/${homeworld[1]}`

    if (resource === 'people') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Height:</strong> {data.height} cm</p>
                <p><strong>Mass:</strong> {data.mass}</p>
                <p><strong>Homeworld:</strong> {}</p>
                <p><strong>Birth Year:</strong> {data.birth_year}</p>
            </>
        )
    }

    else if (resource === 'planets') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Terrain:</strong> {data.terrain}</p>
                <p><strong>Climate:</strong> {data.climate}</p>
                <p><strong>Population:</strong> {data.population}</p>
                <p><strong>Surface Water:</strong> </p>
                <p><strong>Gravity:</strong> {data.gravity}</p>
            </>
        )
    }

    else if (resource === 'starships') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Class:</strong> {data.starship_class}</p>
                <p><strong>Cost:</strong> {data.cost_in_credits}</p>
                <p><strong>Max Speed:</strong> {data.max_atmosphering_speed}</p>
                <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
                <p><strong>Crew:</strong> {data.crew}</p>
                <p><strong>Passengers:</strong> {data.passengers}</p>
            </>
        )
    }

    else if (resource === 'vehicles') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Class:</strong> {data.vehicle_class}</p>
                <p><strong>Cost:</strong> {data.cost_in_credits}</p>
                <p><strong>Max Speed:</strong> {data.max_atmosphering_speed}</p>
                <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
                <p><strong>Crew:</strong> {data.crew}</p>
                <p><strong>Passengers:</strong> {data.passengers}</p>
            </>
        )
    }

    else if (resource === 'species') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Classification:</strong> {data.classification}</p>
                <p><strong>Average Height:</strong> {data.average_height}</p>
                <p><strong>Average Lifespan:</strong> {data.average_lifespan}</p>
                <p><strong>Designation:</strong> {data.designation}</p>
                <p><strong>Language:</strong> {data.language}</p>
                <p><strong>Skin Colors:</strong> {data.skin_colors}</p>
            </>
        )
    }

    else {
        return (
            <>
                <h1 style={{ color: "red" }}>Your search prosses  isn't the droids you're looking for</h1>
            </>
        )
    }
}

export default LukeData;