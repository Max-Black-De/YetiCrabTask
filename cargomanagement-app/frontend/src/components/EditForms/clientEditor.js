import React, { useState } from 'react';

let ClientEditor = (props) => {

    const { clientName } = props.details
    const [display, toogleDisplay] = useState(false);
    const [value, changeValue] = useState(false);
    const handleChange = event => {
        const updatedForm = {
            ...props.zayavka,
            [event.currentTarget.name]: event.currentTarget.value
        };
        props.updateForm(props.index, updatedForm)
    }

    const handleHideEditor = () => {
        toogleDisplay(!display)
        changeValue(!value)
    }

    return (
        <div className="editor-container">
            <div>{clientName}</div>
            {display ? <div className="editor">
                <input
                    onChange={handleChange}
                    value={props.zayavka.clientName}
                    type="text"
                    name="clientName" ></input>
            </div> : null
            }
            <div className="btn">
                <button
                    onClick={handleHideEditor}
                    className="btn-edit" >{!value ? 'Изменить' : 'Сохранить'}</button>
            </div>

        </div>
    );

}

export default ClientEditor;