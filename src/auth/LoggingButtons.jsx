import { useAuth0 } from "@auth0/auth0-react";



/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
export const LoggingButtons = () => {
  // TODO: Replace these with Auth0 functionality
 
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

  const handleLogging = () => {
    if (isAuthenticated) {
      log({ returnTo: window.location.origin })
    } else {
      loginWithRedirect();
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {isAuthenticated ? 'Log Out': 'Log in'}
    </button>
  );
};