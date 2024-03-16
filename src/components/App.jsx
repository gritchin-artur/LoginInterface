import GlobalStyled from "createGlobalStyle/createGlobalStyle.styled";
import Layout from "layout/layout";
import RegisterPage from "pages/registerPage/registerPage";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
const LogInPage = lazy(() => import("../pages/loginPage/loginPage"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              exact
              element={
                // <PublicRoute>
                //   <HomePage />
                // </PublicRoute>
                <p>home</p>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyled />
      <Toaster />
    </>
  );
};
