import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSucess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = () => {
    const {username, password} = this.state
    if (username !== '' && password === '') {
      this.setState({error: "Password shouldn't be empty"})
    } else if (username === '' && password !== '') {
      this.setState({error: "Username shouldn't be empty"})
    } else if (username !== '' && password !== '') {
      this.setState({error: "*Username and Password didn't match"})
    } else if (username === '' && password === '') {
      this.setState({error: "Fields shouldn't be empty"})
    }
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSucess()
    } else {
      this.onSubmitFailure()
    }
  }

  render() {
    const {username, password, error} = this.state
    return (
      <div className="login-form-container">
        <div className="images-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
        </div>
        <form className="login-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <label className="text-name" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="username"
            value={username}
            onChange={this.onChangeUsername}
          />
          <label className="password-name" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="password"
            value={password}
            onChange={this.onChangePassword}
          />
          <button type="submit" className="button">
            Login
          </button>
          <p>{error}</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
