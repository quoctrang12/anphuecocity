import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { PublicRoutes } from "~/routes";

function App() {
  return (
    <Router>
      <Routes>
        {PublicRoutes.map((route, index) => {
          const Layout = route.layout || Fragment;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
