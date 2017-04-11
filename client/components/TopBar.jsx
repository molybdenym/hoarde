/* @flow */

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// import styles from '../styles/TopBar.css';


type UserLogin = {
  token: string,
  user: {
    id: string,
    username: string,
    createdAt: string
  }
}
type Props = {
  data: {
    loginUser: UserLogin,
    loading: boolean,
    error: boolean
  },
};

class Login extends React.Component {
  props: Props;
  state = { un: '', pw: '' };

  handleLogin = () => {
    this.props.mutate({
      variables: { input: { username: this.state.un, password: this.state.pw } },
    })
    .then(({ data }) => {
      console.log('got data', data);
      localStorage.setItem('token', data.loginUser.token);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  handleChange = (e) => {
    const field = e.target.name;
    this.setState({ [field]: e.target.value });
  }

  render() {
    if (this.props.loading) return <div>Logging in ...</div>;
    if (this.props.error) return <h1>Not logged in!</h1>;

    return (
      <div>
        <label>
          <input name='un' value={this.state.un} onChange={this.handleChange} />
        </label>
        <label>
          <input name='pw' value={this.state.pw} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}


const QUERY = gql`
  mutation LoginUserQuery ($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
      user {
        id
        username
        createdAt
      }
    }
  }`;

const LoginWithData = graphql(QUERY)(Login);
export default LoginWithData;
