import React from 'react';

function Project_details (props) {
    return (
        <div>
            <h1>{props.project.description} in {props.project.name}</h1>
        </div>
    )
}

export default Project_details;