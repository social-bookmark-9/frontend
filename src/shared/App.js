import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import OAuthRedirectHandler from './OAuthRedirectHandler';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/oauth/callback/kakao" element={OAuthRedirectHandler} /> */}
      </Routes>
    </div>
  );
}

export default App;


// import React from "react";
// import { Route, Routes } from "react-router-dom";
// // import { ThemeProvider } from "styled-components";
// import "./App.css";
// // import theme from "../styles/theme";

// import UserNickname from "../components/UserNickname";
// import UserCategory from "../components/UserCategory";

// function App() {
//   return (
//     <React.Fragment>
//       {/* <ThemeProvider theme={theme}> */}
//         <Routes>
//           <Route path="/" element={<UserNickname />} />
//           <Route path="/category" element={<UserCategory />} />
//         </Routes>
//       {/* </ThemeProvider> */}
//     </React.Fragment>
//   );
// }

// export default App;
