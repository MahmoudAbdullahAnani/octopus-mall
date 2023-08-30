import React from "react";
import "./App.css";
// Routers
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/Signup";
import ForgotPassword from "./components/auth/Forgot-Password/ForgotPassword";
import ResetPassword from "./components/auth/Forgot-Password/ResetPassword";
import VerifyCodePassword from "./components/auth/Forgot-Password/VerifyCodePassword";
import { useRecoilState } from "recoil";
import {
  products,
  storeCategorys,
  loadingState,
} from "./store/ViewProductHome";
import HomeIndex from "./components/Home/Index";

function App() {
  const [loading, setloading] = useRecoilState(loadingState);
  const [categorys] = useRecoilState(storeCategorys);
  const [prducts] = useRecoilState(products);
  React.useEffect(() => {
    if (categorys.length > 0 && prducts.length > 0) {
      setloading(false);
    }
  }, [prducts, categorys]);
  return (
    <Routes>
      <Route path="*" element={<>404</>} />
      <Route
        path="/"
        element={
          loading ? (
            <div
              className={`h-[100vh] flex justify-center items-center bg-slate-800`}
            >
              <div className="loader"></div>
            </div>
          ) : (
            <HomeIndex />
          )
        }
      />
      <Route
        path="/auth/sign-in"
        element={
          <>
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/sign-up"
        element={
          <>
            <SignUp />
          </>
        }
      />
      <Route
        path="/auth/forgot-password"
        element={
          <>
            <ForgotPassword />
          </>
        }
      />
      <Route
        path="/auth/forgot-password/verify-code"
        element={
          <>
            <VerifyCodePassword />
          </>
        }
      />
      <Route
        path="/auth/forgot-password/reset-password"
        element={
          <>
            <ResetPassword />
          </>
        }
      />
    </Routes>
  );
}

export default App;
