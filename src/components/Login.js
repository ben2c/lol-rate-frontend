import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import { Divider, Icon } from 'semantic-ui-react';


const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target

    //create updatedLoginFormInfo object from loginForm state
    const updatedLoginFormInfo = {
      ...loginFormData,
      [name]: value
    }
    // pass uLFI object to action creator
    updateLoginForm(updatedLoginFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    //call async action creator and pass it to loginFormData as credentials
    login(loginFormData)
  }

  return (
    <div>
      <Divider />
      <form onSubmit={handleSubmit}>
        <div className="ui input">
          <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
          <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} /><br /><br />

          <button className="button button-login" type="submit" value="Log In" > Log In </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)