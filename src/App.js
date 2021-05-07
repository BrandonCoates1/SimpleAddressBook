import './App.css';
import React from "react"

class App extends React.Component {
  state = {
    number: "",
    phoneNumbers: [],
  }

  handleChange = (event) => {
    this.setState({ number: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.number.length != 11) {
      alert("Number entered is not a valid phone number!");
      return
    }
    this.setState({ phoneNumbers: [...this.state.phoneNumbers, this.state.number] });
  }

  displayPhoneArray = () => {
    return this.state.phoneNumbers.map((item, index) => <li key={index}>{item}</li>);
  }

  render() {
    return (
      <div className="container">
        <Header className="header" text="Simple address book"/>
        <Form onSubmit={this.handleSubmit} number={this.state.number} onChange={this.handleChange}/>
        <div className="container2">
          <ListPhoneNumbers text={this.displayPhoneArray()}/>
        </div>
      </div>
    );
  }
}

const Header = (props) => {
  return <h1 className={props.className}>{props.text}</h1>
}

const Form = (props) => {
  return (
    <form className="formBox" onSubmit={props.onSubmit}>
      <input className="inputText" type="text" number={props.number} onChange={props.onChange} />
      <input className="submit" type="submit" value="Submit"/>
    </form>
  );
}

const ListPhoneNumbers = (props) => {
  return <ul>{props.text}</ul>
}

export default App;