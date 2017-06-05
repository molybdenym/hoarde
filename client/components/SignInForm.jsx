/* @flow */

import React from 'react';
import { gql, graphql } from 'react-apollo';

import styles from '../styles/SignInForm.css';


type Props = {
  mutate: any;
  data?: { loginUser: LoginUserPayload, loading: boolean, error: boolean };
};

class SignInForm extends React.Component {
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
      console.log('There was a problem logging in:', err.graphQLErrors);
    });
  }

  handleChange = (e: SyntheticInputEvent) => {
    const field = e.target.name;
    console.log(e.target.checkValidity());
    this.setState({ [field]: e.target.value });
  }


  render() {
    return (
      <div className={styles.form}>
        <div className={styles.head}>
          <h2>Sign In</h2>
          <a href="">or Sign Up</a>
        </div>

        <label>
          Email:
          <input
            type="email"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Pass:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.button} onClick={this.handleLogin}>
          Go
        </button>
        <p className="small"><a href="">Recover Creds</a></p>
      </div>
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

export default graphql(MUTATION)(SignInForm);
