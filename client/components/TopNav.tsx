// Modules
import * as React from 'react';
// import { ReactChildren } from 'react';
import { withApollo, WithApolloClient } from 'react-apollo';
// Libs
// Components
import { Modal } from './Modal';
import { SignInForm } from './SignInForm';
// Styles
import { styles } from '../main.css';
// Types
type Props = {
  token: string | null,
  children?: JSX.Element | string,
};

const TopNavComp: React.SFC<WithApolloClient<Props>> = props => {
  const handleLogout = () => {
    props.client.resetStore();
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.location.reload();
  }

  if (props.token) {
    return (
      <main className="page">
        <nav>
          <div>{}</div>
          <button
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
        {props.children}
      </main>
    );
  }

  return (
    <main>
      <nav />
      <Modal handleClose={() => { console.log('click!!'); }}>
        <SignInForm />
      </Modal>
    </main>
  );
}

export const TopNav = withApollo<Props>(TopNavComp);
