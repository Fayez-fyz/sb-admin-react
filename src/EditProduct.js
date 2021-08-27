import React from 'react'

export default function EditProduct(props) {
    return (
        <div>
            <h1>User Data : {props.match.params.id}</h1>
        </div>
    )
}
