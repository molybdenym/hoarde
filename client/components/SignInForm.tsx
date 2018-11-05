// Modules
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
// Libs
// Components
import { SigninPayload, AuthProviderEmail } from 'types/gen-types/graphcool/types';
// Styles
import styles from '../styles/SignInForm.css';
// Types


class SignInMutation extends Mutation<{signinUser: SigninPayload}, AuthProviderEmail> {};

export class SignInForm extends React.Component<{}, AuthProviderEmail> {
  state: AuthProviderEmail = { email: '', password: '' };

  loginCompleted = (res: {signinUser: SigninPayload}) => {
    const { token, user } = res.signinUser;
    if (token) localStorage.setItem('token', token);
    if (user) localStorage.setItem('email', JSON.stringify(user.email));
    window.location.reload();
  }

  loginError = (err: any) => {
    console.log('There was a problem logging in:', err.graphQLErrors);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    if (field === 'email') this.setState({ email: e.target.value });
    if (field === 'password') this.setState({ password: e.target.value });
  }

  render() {
    return (
      <SignInMutation mutation={LOGIN_USER} onCompleted={this.loginCompleted} onError={this.loginError}>
        {(signinUser, { data }) => (
          <div className={styles.form}>
            <div className={styles.head}>
              <h2>Sign In</h2>
              <a href="">or Sign Up</a>
            </div>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
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

            <button
              className={styles.button}
              onClick={() => signinUser({ variables: { ...this.state } })}
            >
              Go
            </button>
            <p className="small"><a href="">Recover Creds</a></p>
          </div>
        )}
      </SignInMutation>
    );
  }
}

const LOGIN_USER = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(
      email: {
        email: $email,
        password: $password
      }
    ){
      token
      user {
        id
        username
        createdAt
      }
    }
  }`;

const CREATE_USER = gql`
  mutation CreateUserMutation($email: String!, $password: String!) {
    createUser(
      username: $email,
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      }
    ){
        email
    }
  }`;
