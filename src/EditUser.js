import React from 'react'

export default function EditUser(props) {
    return (
        <div>
            <h1>User Data : {props.match.params.id}</h1>
        </div>
    )
}
