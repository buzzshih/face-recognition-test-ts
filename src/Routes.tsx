import { Routes, Route, useRouteError } from "react-router-dom";
import Recognition from './Components/Recognition'

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1 className=" bg-red-700">Home Page</h1>}/>
      <Route path="/recognition" element={<Recognition/>}/>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
export default CustomRoutes;
