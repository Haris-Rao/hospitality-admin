import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-modern-drawer/dist/index.css";
import "react-phone-number-input/style.css";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./assets/Styles/style.css";
import "./assets/Styles/table.css";
import ScrollToTop from "./helper/ScrollToTop";
import { Loader } from "./components/Core/Loader";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useGetMe } from "customHooks/useGetMe";
import "react-day-picker/style.css";

import { lazy, Suspense, useEffect } from "react";
import ProtectedRouter from "helper/ProtectedRoute";
import { filterRoutes, getFirstRoute } from "./helper/HelperFunction";
import { useSelector } from "react-redux";
import { routes } from "./routes";

const NotFound = lazy(() => import("pages/NotFound"));

function App() {
  const { user } = useSelector((state) => state.authReducer);
  const userLoading = useGetMe();

  if (userLoading) {
    return <Loader className="vh-100" />;
  }

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loader className={"vh-100"} />}>
          <Routes>
            {routes?.map((route, index) => {
              return (
                <>
                  {Array?.isArray(route?.subMenu) ? (
                    route.subMenu.map((subRoute, subIndex) => {
                      return (
                        <Route
                          key={subIndex}
                          path={subRoute.path}
                          exact={subRoute.exact}
                          element={
                            <ProtectedRouter
                              element={subRoute.element}
                              isProtected={route.protected}
                            />
                          }
                        />
                      );
                    })
                  ) : (
                    <Route
                      key={index}
                      path={route?.path}
                      exact={route?.exact}
                      element={
                        <ProtectedRouter
                          element={route.element}
                          isProtected={route.protected}
                        />
                      }
                    />
                  )}
                </>
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
