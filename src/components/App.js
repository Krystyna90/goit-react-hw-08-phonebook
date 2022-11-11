import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import HomePage from "pages/HomePage/HomePage";

import LoaderComponent from "./Loader/LoaderComponent";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage"));

export default function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Suspense fallback={<LoaderComponent></LoaderComponent>}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>

          <Route
            path="/contacts"
            element={<ContactsPage></ContactsPage>}
          ></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
