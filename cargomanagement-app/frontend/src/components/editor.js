import React, { useState } from 'react';

let Editor = (props) => {

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
            {display ? <div className="editor">
                            <input
                                onChange={handleChange}
                                value={props.zayavka.clientName}
                                type="text"
                                name="clientName" ></input>
                            {/* <input
                                onChange={handleChange}
                                value={props.zayavka.carrierName}
                                type="text"
                                name="carrierName"></input>
                            <input
                                onChange={handleChange}
                                value={props.zayavka.carrierPhone}
                                type="text"
                                name="carrierPhone"></input>
                            <input
                                onChange={handleChange}
                                value={props.zayavka.comment}
                                type="text"
                                name="comment"></input>
                            <input
                                onChange={handleChange}
                                value={props.zayavka.atiCode}
                                type="text"
                                name="atiCode"></input> */}
                        </div> : null
            }
            <button
                onClick={() => props.deleteForm(props.index)}
                className="btn-delete">Удалить</button>
            <button
                onClick={handleHideEditor}
                className="btn-edit" >{!value ? 'Изменить' : 'Сохранить'}</button>

        </div>
    );
    
}

export default Editor;