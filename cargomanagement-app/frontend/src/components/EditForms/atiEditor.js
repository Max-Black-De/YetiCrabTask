import React, { useState } from 'react';

let AtiEditor = (props) => {

    const { atiCode } = props.details
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
            <a href= {`https://ati.su/firms/${atiCode}/info`}>Информация по АТИ</a>

            {display ? <div className="editor">
                <input
                    onChange={handleChange}
                    value={props.zayavka.atiCode}
                    type="text"
                    name="atiCode"></input>
            </div> : null
            }
            <button
                onClick={handleHideEditor}
                className="btn-edit" >{!value ? 'Изменить' : 'Сохранить'}</button>

        </div>
    );

}

export default AtiEditor;