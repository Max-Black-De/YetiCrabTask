import React, { useState } from 'react';

let CommentEditor = (props) => {

    const { comment } = props.details;

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
            <div className="limited-width">{comment}</div>
            {display ? <div className="editor">
                <input
                    className="width-input"
                    onChange={handleChange}
                    value={props.zayavka.comment}
                    type="text"
                    name="comment"></input>
            </div> : null
            }
            <button
                onClick={handleHideEditor}
                className="btn-edit" >{!value ? 'Изменить' : 'Сохранить'}</button>

        </div>
    );

}

export default CommentEditor;