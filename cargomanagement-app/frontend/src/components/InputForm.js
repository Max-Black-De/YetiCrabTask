import React from 'react';

class InputForm extends React.Component {

  newElementNumber = React.createRef()
  newElementClient = React.createRef()
  newElementName = React.createRef()
  newElementPhone = React.createRef()
  newElementComment = React.createRef()
  newElementAti = React.createRef()

  createOrder = (event) => {
    event.preventDefault()
    const zayavka = {
      zayavkaNumber: this.newElementNumber.current.value,
      dateTime: Date().toLocaleString(),
      clientName: this.newElementClient.current.value,
      carrierName: this.newElementName.current.value,
      carrierPhone: this.newElementPhone.current.value,
      comment: this.newElementComment.current.value,
      atiCode: this.newElementAti.current.value
    }
    this.props.addZayavka(zayavka)
    event.currentTarget.reset()
  }

  render() {
    return (
      <div className="input">
        <form className="input-form"
        onSubmit={this.createOrder}
        >
          <div>
            <label>Заявка № </label>
            <input className="zayavkaNumber"
            ref={this.newElementNumber}></input>
          </div>

          <div className="curentTime">
            <label>Дата и время: </label>
          </div>

          <div>
            <label>Название фирмы клиента </label>
            <input
              className="name-of-client"
              ref={this.newElementClient} />
          </div>

          <div>
            <label>ФИО перевозчика </label>
            <input
              className="name-of-carrier"
              ref={this.newElementName} />
          </div>

          <div>
            <label>Контактный телефон перевозчика </label>
            <input
              className="phone-of-carrier"
              type="tel"
              ref={this.newElementPhone} />
          </div>

          <div>
            <label>Комментарии </label>
            <textarea
              className="comment"
              ref={this.newElementComment} />
          </div>

          <div>
            <label>ATI код сети перевозчика </label>
            <input
              className="ati-cod-of-carrier"
              ref={this.newElementAti} />
          </div>

          <button className="add-zayavka">
            Добавить компанию
          </button>
        </form>
      </div>
    )
  }
}

export default InputForm;
