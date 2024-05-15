import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './Logout';
import Profile from './Profile';

export default function Root() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <h1>Basic Auth0 Login</h1>
      <div>
        <Profile />
        {!isLoading ? (
          <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}