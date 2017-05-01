/* @flow */

import React from 'react';
import { gql, graphql, withApollo } from 'react-apollo';

// import styles from '../styles/TopBar.css';


type Props = {
  token: string,
  mutate: any,
  client: any,
  data?: { loginUser: LoginUserPayload, loading: boolean, error: boolean },
  children?: React$Element<*>,
};

class Login extends React.Component {
  props: Props;
  state: LoginUserInput = { username: '', password: '', clientMutationId: null };

  handleLogin = () => {
    this.props.mutate({
      variables: { data: this.state },
    })
    .then((res) => {
      const { token, username } = res.data.loginUser;
      localStorage.setItem('token', token);
      localStorage.setItem('id', JSON.stringify(username));
      window.location.reload();
    })
    .catch((err) => {
      console.log('There was a problem logging in:', err.type());
    });
  }

  handleLogout = () => {
    this.props.client.resetStore();
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.location.reload();
  }

  handleChange = (e) => {
    const field = e.target.name;
    this.setState({ [field]: e.target.value });
  }

  render() {
    const { token, data } = this.props;

    if (token) {
      return (
        <main className="page">
          <nav>
            <div>{data ? data.loginUser.user.username : 'Me'}</div>
            <button
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </nav>
          {this.props.children}
        </main>
      );
    }

    return (
      <main>
        <nav>
        <label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange} />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} />
        </label>

        <button
          onClick={this.handleLogin}
        >
          Login
        </button>
        </nav>
      </main>
    );
  }
}

const MUTATION = gql`
  mutation LoginUserQuery ($data: LoginUserInput!) {
    loginUser(input: $data) {
      token
      user {
        id
        username
        createdAt
      }
    }
  }`;

export default withApollo(graphql(MUTATION)(Login));
