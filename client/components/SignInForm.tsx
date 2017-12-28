import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';

import { LoginUserPayload } from 'types/gen-types/scaphold/loginuserpayload.type';
import { LoginUserInput } from 'types/gen-types/scaphold/loginuserinput.input-type';

import { styles } from '../styles/SignInForm.css';

// interface DataProps {
//   data: LoginUserPayload & QueryProps;
// }
// type Props = DataProps;
type Props = {
  mutate: any;
  data: { loginUser: LoginUserPayload } & QueryProps;
};

class SignInForm extends React.Component<Props, LoginUserInput> {
  state: LoginUserInput = { username: '', password: '', clientMutationId: null };

  handleLogin = () => {
    this.props.mutate({
      variables: { data: this.state },
    })
    .then((res: any) => {
      const { token, username } = res.data.loginUser;
      localStorage.setItem('token', token);
      localStorage.setItem('id', JSON.stringify(username));
      window.location.reload();
    })
    .catch((err: any) => {
      console.log('There was a problem logging in:', err.graphQLErrors);
    });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    if (field === 'username') this.setState({ username: e.target.value });
    if (field === 'password') this.setState({ password: e.target.value });
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

export default graphql<LoginUserPayload>(MUTATION)(SignInForm);
