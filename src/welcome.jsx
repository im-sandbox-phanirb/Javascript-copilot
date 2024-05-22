import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const isValid = this.validateEmail(email);

    if (email === '') {
      this.setState({ emailError: 'Email is required' });
    } else if (email.length < 10) {
      this.setState({ emailError: 'Email is too short' });
    } else if (email.length > 50) {
      this.setState({ emailError: 'Email is too long' });
    } else if (!isValid) {
      this.setState({ emailError: 'Email is invalid' });
    } else {
      this.setState({ emailError: '' });
      // process form
    }
  };

  validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <div style={{ color: 'red' }}>{this.state.emailError}</div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { EmailForm };
