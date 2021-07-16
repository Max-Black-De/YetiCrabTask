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
    this.props.addZayavka(zayavka);
    event.currentTarget.reset()
  }


  render() {
    return (
      <div className="input-container">
        <form className="input-form"
          onSubmit={this.createOrder}
        >
          <div className="zayavka-number">
            <label>Заявка № </label>
            <input className="zayavkaNumber"
              ref={this.newElementNumber}></input>
          </div>

          <div className="curentTime">
            <label>Дата и время: </label>
          </div>

          <div className="name-of-client">
            <label>Название фирмы клиента </label>
            <input
              className="nameOfClient"
              ref={this.newElementClient} />
          </div>

          <div className="name-of-carrier">
            <label>ФИО перевозчика </label>
            <input
              className="nameOfCarrier"
              ref={this.newElementName} />
          </div>

          <div className="phone-of-carrier">
            <label>Контактный телефон перевозчика </label>
            <input
              className="phoneOfCarrier"
              type="tel"
              ref={this.newElementPhone} />
          </div>

          <div className="comment-for-zayavka">
            <label>Комментарии </label>
            <textarea
              className="commentForZayavka"
              ref={this.newElementComment} />
          </div>

          <div className="ati-cod-of-carrier">
            <label>ATI код сети перевозчика </label>
            <input
              className="atiCodOfCarrier"
              ref={this.newElementAti} />
          </div>
          <div className="add-btn-container">
            <button className="btn-add-zayavka">
              Добавить заявку
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default InputForm;
