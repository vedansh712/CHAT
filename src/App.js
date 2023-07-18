import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomePage from "./HomePage";
import Authentication from "./authentication/Authentication";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("user not loged in ");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>{" "}
        </div>
      ) : (
        <>{user ? <HomePage /> : <Authentication />}</>
      )}
    </div>
  );
}

export default App;
