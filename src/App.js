import { useState } from 'react';
import Navigation from './navigation';
import ErrorBoundary from './erorrBoundary';
import { UserContext } from './contexts';
import UserAuth from './userAuth';

function App(props) {
  const [user, setUser] = useState(props.user ? {
    username: props.user,
    id: props.user,
    loggedIn: true
  } : null)

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true,
    })
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser(null)
  }
  return (
    <div className="App">
      <ErrorBoundary>
        <UserContext.Provider value={{
      user,
      logIn,
      logOut
    }}>
      <UserAuth>
      <Navigation />
      </UserAuth>
      </UserContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
