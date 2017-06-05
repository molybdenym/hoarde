/* @flow */

import React from 'react';
import { withApollo } from 'react-apollo';

import Modal from './Modal';
import SignInForm from './SignInForm';


type Props = {
  token: string,
  client: any,
  children?: React$Element<*>,
};

class TopNav extends React.Component {
  props: Props;

  handleLogout = () => {
    this.props.client.resetStore();
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.location.reload();
  }


  render() {
    const { token } = this.props;

    if (token) {
      return (
        <main className="page">
          <nav>
            <div>{}</div>
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
        </nav>
        <Modal handleClose={() => { console.log('click!!'); }}>
          <SignInForm />
        </Modal>
      </main>
    );
  }
}

export default withApollo(TopNav);
