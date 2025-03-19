// import React, { lazy } from 'react';

// // project import
// import Loadable from '../common/Loadable';
// import ProtectUserLogin from '../permissions/ProtectUserLogin';

// // render - login
// const Login = Loadable(lazy(() => import('../pages/Login')));
// const Login_otp = Loadable(lazy(() => import('../pages/Login_otp')));
// const Login_newUser = Loadable(lazy(() => import('../pages/Login_newUser')));

// // ==============================|| AUTH ROUTING ||============================== //

// const LoginRoutes = {
//   path: '',
//   children: [
//     {
//       path: '/',
//       element: <ProtectUserLogin />,
//       children: [
//         {
//           path: 'login',
//           element: <Login />,
//         },
//         {
//           path: "otp",
//           element: <Login_otp />,
//         },
//         {
//           path: "newUser",
//           element: <Login_newUser />,
//         },
//       ],
//     },
//   ],
// };

// export default LoginRoutes;
