import React, { cloneElement } from "react";


export default function familia(props) {
    return (
        <div>
            {
                props.children.map(function children(child, i) {
                    return cloneElement(child, {...props, key:i})
                })
            }
        </div>
    )
}