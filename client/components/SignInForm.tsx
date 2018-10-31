import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, Mutation, QueryProps } from 'react-apollo';
import { LoginUserPayload } from 'types/gen-types/scaphold/loginuserpayload.type';
import { LoginUserInput } from 'types/gen-types/scaphold/loginuserinput.input-type';
import { styles } from '../styles/SignInForm.css';


class SignInMutation extends Mutation<LoginUserPayload> {};

class SignInForm extends React.Component<{}, LoginUserInput> {
  state: LoginUserInput = { username: '', password: '', clientMutationId: null };

  loginCompleted = (res: LoginUserPayload) => {
    const { token, user } = res;
    if (token) localStorage.setItem('token', token);
    if (user) localStorage.setItem('id', JSON.stringify(user.username));
    window.location.reload();
  }

  loginError = (err: any) => {
    console.log('There was a problem logging in:', err.graphQLErrors);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    if (field === 'username') this.setState({ username: e.target.value });
    if (field === 'password') this.setState({ password: e.target.value });
  }


  render() {
    return (
      <SignInMutation mutation={LOGIN_USER} onCompleted={this.loginCompleted} onError={this.loginError}>
        {(loginUser, { data }) => (
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

            <button
              className={styles.button}
              onClick={() => loginUser({ variables: { data: this.state } })}
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

export default SignInForm;
