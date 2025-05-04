import { useAuth0 } from "@auth0/auth0-react";

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { user, isAuthenticated, isLoading} = useAuth0();

  if(isLoading) return <div className="text-center p-4">loading.</div>

  if (!isAuthenticated) return <div className="text-center p-4">You're not logged in</div>

  return (
    <div className="p-4 flex justify-center">


      <div className="bg-blue rounded-lg p-7 text-black mt-4 shadow-md text-center items-center">
    <h2 className="text-xl font-bold">Profile</h2>
      <p className="text-lg mt-2">{user.name}</p>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="text-sm text-gray-500">{user.profile}</p>
    </div>
    </div>
  );
};

export default Profile;
