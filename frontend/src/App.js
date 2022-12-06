import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "../src/user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/:userId/places" element={<UserPlaces />} />
        <Route exact path="/places/new" element={<NewPlace />} />
        <Route exact path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/:userId/places" element={<UserPlaces />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          {/* <Routes> */}
          {/* <Route exact path="/" element={<Users />} />
            <Route exact path="/:userId/places" element={<UserPlaces />} />
            <Route exact path="/places/new" element={<NewPlace />} />
            <Route exact path="/places/:placeId" element={<UpdatePlace />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" replace />} /> */}
          {routes}
          {/* </Routes> */}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
