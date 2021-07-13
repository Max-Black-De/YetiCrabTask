import React from 'react';
import ClientEditor from './EditForms/clientEditor';
import CarrierEditor from './EditForms/carrierEditor';
import PhoneEditor from './EditForms/phoneEditor';
import CommentEditor from './EditForms/commentEditor';
import AtiEditor from './EditForms/atiEditor';

let Zayavka = (props) => {

    const { dateTime, zayavkaNumber } = props.details

    return (
        <li className="zayavka">
            <div className="zayavka-number">
                Заявка № {zayavkaNumber}
            </div>

            <div className="date-time">
                {dateTime}
            </div>

            <div className="client-name">
                <ClientEditor
                    key={props.key}
                    index={props.index}
                    zayavka={props.zayavka}
                    details={props.details}
                    updateForm={props.updateForm} />
            </div>

            <div className="carrier-name">
                <CarrierEditor
                    key={props.key}
                    index={props.index}
                    zayavka={props.zayavka}
                    details={props.details}
                    updateForm={props.updateForm} />
            </div>

            <div className="carrier-phone">
                <PhoneEditor
                    key={props.key}
                    index={props.index}
                    zayavka={props.zayavka}
                    details={props.details}
                    updateForm={props.updateForm} />
            </div>

            <div className="comment">
                <CommentEditor
                    key={props.key}
                    index={props.index}
                    zayavka={props.zayavka}
                    details={props.details}
                    updateForm={props.updateForm} />
            </div>

            <div className="ati-code">
                <AtiEditor
                    key={props.key}
                    index={props.index}
                    zayavka={props.zayavka}
                    details={props.details}
                    updateForm={props.updateForm}
                    deleteForm={props.deleteForm} />
            </div>

        </li>
    )

}

export default Zayavka;