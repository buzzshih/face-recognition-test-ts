// import Layout from "./components/Layout";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./Routes";
import { useAppStateStore } from "./store/appState";

const AppWrapper = () => {
  const { APP } = useAppStateStore();
  const { currentConfig } = APP;

  console.log("currentConfig",currentConfig)

  return (
    <BrowserRouter>
          {/* <Layout> */}
            <Helmet>
              <title>Face Recognition Test</title>
              <meta name="description" content="Face Recognition Test" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
              />
            </Helmet>
            <CustomRoutes />
          {/* </Layout> */}
    </BrowserRouter>
  );
};
export default AppWrapper;
