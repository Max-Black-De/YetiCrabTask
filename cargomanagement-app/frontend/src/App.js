import './App.css';
import React from 'react';
import InputForm from './components/InputForm';
import Zayavka from './components/zayavka';

class App extends React.Component {

  state = {
    form: {
    }
  }
  
  addZayavka = zayavka => {
    const form = { ...this.state.form };
    form[`zayavka${Date.now()}`] = zayavka;
    this.setState({ form });
  }
  
  updateForm = (key, updatedZayavka) => {
    const form = {...this.state.form};
    form[key] = updatedZayavka;
    this.setState({ form });
    
  }
  
  deleteForm = (key) => {
    const form = { ...this.state.form}
    delete form[key];
    this.setState ({ form });
  }

  render() {
    return (
      <div className="App">
        <InputForm
          className="inputForm"
          addZayavka={this.addZayavka} />
        <div className="main-list">
          {Object.keys(this.state.form).map(key => {
            return (
              <div className="wrapper">
                <div className="zayavka-container">
                  <Zayavka
                  key={key}
                  index={key}
                  details={this.state.form[key]}
                  zayavka={this.state.form[key]}
                  deleteForm={this.deleteForm} 
                  updateForm={this.updateForm} />
                </div>
                <div className="editor-container">
                  <button
                  onClick={() => this.deleteForm(key)}
                    className="btn-delete">Удалить</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
