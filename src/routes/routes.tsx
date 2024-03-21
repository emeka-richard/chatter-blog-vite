import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeroPageLayout from "../layouts/HeroPageLayout";
import AuthLayout from "../layouts/AuthLayout-layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout-layouts/AppLayout";
import ErrorPage from "../Error-Page";
import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
import AuthRegLogFrame from "../layouts/AuthLayout-layouts/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame";
import AuthAccountVerification from "../layouts/AuthLayout-layouts/Auth-Accout-Verify-Layout/Auth-acct-verification";
import FeedsUI from "../UI/AppLayout-UI/Feeds-UIs/Feeds-UI";
import PublishArticleLayout from "../layouts/PublishArticleLayout";
import AnalyticsUI from "../layouts/AppLayout-layouts/AnalyticsLayout";
import Spinner from "../middlewares/Spinner/Spinner";
import {
  RegisterUI,
  AuthFrame,
  LoginUI,
  FeedsForYouContentUI,
  FeedsFeaturedContentUI,
  FeedsRecentContentUI,
  CreatePostUI,
  PreviewArticleUI,
  AnalyticsAllArticleUI,
  AnalyticsEachArticleUI,
} from "./lazy-routes";
import useAuthVerifyUser from "../middlewares/isAuthenticated";


const RouteComponent: React.FC = () => {

  const { isAuthenticated, currentUser, isLoading } = useAuthVerifyUser()

  if (isLoading) {
    // Render loading indicator while authentication state is being checked
    return <Spinner />;
  }


  return (
    <Router>
      <Routes>
        <Route errorElement={<ErrorPage />}>
          <Route element={<HeroPageLayout />} >
            <Route path="/" element={<HeroPageUI />} />
          </Route>
          <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
            <Route
              path="/auth"
              element={
                <Suspense fallback={<Spinner />}>
                  <AuthFrame />
                </Suspense>
              }
            >
              <Route index element={<Navigate to="/auth/sign" />} />
              <Route path="/auth/sign" element={<AuthRegLogFrame />}>
                <Route
                  path="/auth/sign/register"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <RegisterUI />
                    </Suspense>
                  }
                />
                <Route
                  path="/auth/sign/login"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <LoginUI />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path="/auth/account-verification/*"
                element={ currentUser ? <AuthAccountVerification /> : <Navigate to={"/auth/sign/login"} /> }
              />
            </Route>
          </Route>
          <Route 
            element={ isAuthenticated ? <AppLayout /> : <Navigate to={"/auth/sign/login"} /> } >
          {/* <Route element={<AppLayout />}> */}
            <Route path="/feeds" element={<FeedsUI />}>
              <Route index element={<Navigate to="/feeds/all" />} />
              <Route
                path="/feeds/all"
                element={
                  <Suspense fallback={<Spinner />}>
                    <FeedsForYouContentUI />{" "}
                  </Suspense>
                }
              />
              <Route
                path="/feeds/featured"
                element={
                  <Suspense fallback={<Spinner />}>
                    <FeedsFeaturedContentUI />
                  </Suspense>
                }
                // element={<FeedsFeaturedContentUI />}
              />
              <Route
                path="/feeds/recent"
                element={
                  <Suspense fallback={<Spinner />}>
                    <FeedsRecentContentUI />
                  </Suspense>
                }
                // element={<FeedsRecentContentUI />}
              />
            </Route>
            <Route path="/article" element={<PublishArticleLayout />}>
              <Route
                path="/article/publish"
                element={
                  <Suspense fallback={<Spinner />}>
                    <CreatePostUI />
                  </Suspense>
                }
              />
              <Route
                path="/article/preview"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PreviewArticleUI />
                  </Suspense>
                }
              />
            </Route>
            <Route path="/analytics" element={<AnalyticsUI />}>
              <Route
                index
                element={
                  <Suspense fallback={<Spinner />}>
                    <AnalyticsAllArticleUI />
                  </Suspense>
                }
              />
              <Route
                path="/analytics/:id"
                element={
                  <Suspense fallback={<Spinner />}>
                    <AnalyticsEachArticleUI />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteComponent;





// import React, { Suspense } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// // } from "react-router-dom";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import HeroPageLayout from "../layouts/HeroPageLayout";
// import AuthLayout from "../layouts/AuthLayout-layouts/AuthLayout";
// import AppLayout from "../layouts/AppLayout-layouts/AppLayout";
// import ErrorPage from "../Error-Page";
// import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
// import AuthRegLogFrame from "../layouts/AuthLayout-layouts/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame";
// import AuthAccountVerification from "../layouts/AuthLayout-layouts/Auth-Accout-Verify-Layout/Auth-acct-verification";
// import FeedsUI from "../UI/AppLayout-UI/Feeds-UIs/Feeds-UI";
// import PublishArticleLayout from "../layouts/PublishArticleLayout";
// import AnalyticsUI from "../layouts/AppLayout-layouts/AnalyticsLayout";
// import Spinner from "../middlewares/Spinner/Spinner";
// import {
//   RegisterUI,
//   AuthFrame,
//   LoginUI,
//   FeedsForYouContentUI,
//   FeedsFeaturedContentUI,
//   FeedsRecentContentUI,
//   CreatePostUI,
//   PreviewArticleUI,
//   AnalyticsAllArticleUI,
//   AnalyticsEachArticleUI,
// } from "./lazy-routes";
// import {isUserAuthenticated, userInfo} from "../middlewares/isAuthenticated";
// // import useAuthVerifyUser from "../middlewares/isAuthenticated";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route errorElement={<ErrorPage />}>
//       <Route element={<HeroPageLayout />}>
//         <Route path="/" element={<HeroPageUI />} />
//       </Route>
//       <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
//         <Route
//           path="/auth"
//           element={
//             <Suspense fallback={<Spinner />}>
//               <AuthFrame />
//             </Suspense>
//           }
//         >
//           <Route index element={<Navigate to="/auth/sign" />} />
//           <Route path="/auth/sign" element={<AuthRegLogFrame />}>
//             <Route
//               path="/auth/sign/register"
//               element={
//                 <Suspense fallback={<Spinner />}>
//                   <RegisterUI />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="/auth/sign/login"
//               element={
//                 <Suspense fallback={<Spinner />}>
//                   <LoginUI />
//                 </Suspense>
//               }
//             />
//           </Route>
//           <Route
//             path="/auth/account-verification/*"
//             element={
//               userInfo ? (
//                 <AuthAccountVerification />
//               ) : (
//                 <Navigate to={"/auth/sign/login"} />
//               )
//             }
//           />
//         </Route>
//       </Route>
//       <Route
//         element={
//           isUserAuthenticated ? <AppLayout /> : <Navigate to={"/auth/sign/login"} />
//         }
//       >
//         {/* <Route element={<AppLayout />}> */}
//         <Route path="/feeds" element={<FeedsUI />}>
//           <Route index element={<Navigate to="/feeds/all" />} />
//           <Route
//             path="/feeds/all"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <FeedsForYouContentUI />{" "}
//               </Suspense>
//             }
//           />
//           <Route
//             path="/feeds/featured"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <FeedsFeaturedContentUI />
//               </Suspense>
//             }
//             // element={<FeedsFeaturedContentUI />}
//           />
//           <Route
//             path="/feeds/recent"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <FeedsRecentContentUI />
//               </Suspense>
//             }
//             // element={<FeedsRecentContentUI />}
//           />
//         </Route>
//         <Route path="/article" element={<PublishArticleLayout />}>
//           <Route
//             path="/article/publish"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <CreatePostUI />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/article/preview"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <PreviewArticleUI />
//               </Suspense>
//             }
//           />
//         </Route>
//         <Route path="/analytics" element={<AnalyticsUI />}>
//           <Route
//             index
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <AnalyticsAllArticleUI />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/analytics/:id"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <AnalyticsEachArticleUI />
//               </Suspense>
//             }
//           />
//         </Route>
//       </Route>
//       <Route path="*" element={<ErrorPage />} />
//     </Route>
//   )
// );

// export default router;

/////////////////////////

// const RouteComponent: React.FC = () => {

//   const { isAuthenticated, currentUser, isLoading } = useAuthVerifyUser()

//   if (isLoading) {
//     // Render loading indicator while authentication state is being checked
//     return <Spinner />;
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route errorElement={<ErrorPage />}>
//           <Route element={<HeroPageLayout />} >
//             <Route path="/" element={<HeroPageUI />} />
//           </Route>
//           <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
//             <Route
//               path="/auth"
//               element={
//                 <Suspense fallback={<Spinner />}>
//                   <AuthFrame />
//                 </Suspense>
//               }
//             >
//               <Route index element={<Navigate to="/auth/sign" />} />
//               <Route path="/auth/sign" element={<AuthRegLogFrame />}>
//                 <Route
//                   path="/auth/sign/register"
//                   element={
//                     <Suspense fallback={<Spinner />}>
//                       <RegisterUI />
//                     </Suspense>
//                   }
//                 />
//                 <Route
//                   path="/auth/sign/login"
//                   element={
//                     <Suspense fallback={<Spinner />}>
//                       <LoginUI />
//                     </Suspense>
//                   }
//                 />
//               </Route>
//               <Route
//                 path="/auth/account-verification/*"
//                 element={ currentUser ? <AuthAccountVerification /> : <Navigate to={"/auth/sign/login"} /> }
//               />
//             </Route>
//           </Route>
//           <Route
//             element={ isAuthenticated ? <AppLayout /> : <Navigate to={"/auth/sign/login"} /> } >
//           {/* <Route element={<AppLayout />}> */}
//             <Route path="/feeds" element={<FeedsUI />}>
//               <Route index element={<Navigate to="/feeds/all" />} />
//               <Route
//                 path="/feeds/all"
//                 element={
//                   <Suspense fallback={<Spinner />}>
//                     <FeedsForYouContentUI />{" "}
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="/feeds/featured"
//                 element={
//                   <Suspense fallback={<Spinner />}>
//                     <FeedsFeaturedContentUI />
//                   </Suspense>
//                 }
//                 // element={<FeedsFeaturedContentUI />}
//               />
//               <Route
//                 path="/feeds/recent"
//                 element={
//                   <Suspense fallback={<Spinner />}>
//                     <FeedsRecentContentUI />
//                   </Suspense>
//                 }
//                 // element={<FeedsRecentContentUI />}
//               />
//             </Route>
//             <Route path="/article" element={<PublishArticleLayout />}>
//               <Route
//                 path="/article/publish"
//                 element={
//                   <Suspense fallback={<Spinner />}>
//                     <CreatePostUI />
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="/article/preview"
//                 element={
//                   <Suspense fallback={<Spinner />}>
//                     <PreviewArticleUI />
//                   </Suspense>
//                 }
//               />
//             </Route>
//             <Route path="/analytics" element={<AnalyticsUI />}>
//               <Route
//                 index
//                 element={
//                   <Suspense fallback={<Spinner />}>
//                     <AnalyticsAllArticleUI />
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="/analytics/:id"
//                 element={
//                   <Suspense fallback={<Spinner />}>
//                     <AnalyticsEachArticleUI />
//                   </Suspense>
//                 }
//               />
//             </Route>
//           </Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default RouteComponent;

/////////////////////////////////////////////////////

// import React from "react";
// import { Navigate, createBrowserRouter } from "react-router-dom";
// import HeroPageLayout from "../layouts/HeroPageLayout";
// import AuthLayout from "../layouts/AuthLayout-layouts/AuthLayout";
// import AppLayout from "../layouts/AppLayout-layouts/AppLayout";
// import ErrorPage from "../Error-Page";
// import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
// import AuthRegLogFrame from "../layouts/AuthLayout-layouts/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame";
// import AuthAccountVerification from "../layouts/AuthLayout-layouts/Auth-Accout-Verify-Layout/Auth-acct-verification";
// import FeedsUI from "../UI/AppLayout-UI/Feeds-UIs/Feeds-UI";
// import PublishArticleLayout from "../layouts/PublishArticleLayout";
// import AnalyticsUI from "../layouts/AppLayout-layouts/AnalyticsLayout";
// import Spinner from "../middlewares/Spinner/Spinner";
// import {
//   RegisterUI,
//   AuthFrame,
//   LoginUI,
//   FeedsForYouContentUI,
//   FeedsFeaturedContentUI,
//   FeedsRecentContentUI,
//   CreatePostUI,
//   PreviewArticleUI,
//   AnalyticsAllArticleUI,
//   AnalyticsEachArticleUI,
// } from "./lazy-routes";
// import useAuthVerifyUser from "../middlewares/isAuthenticated";

// const { isAuthenticated } = useAuthVerifyUser()

// const router = createBrowserRouter([
//   {
//     element: <HeroPageLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <HeroPageUI />
//       },
//     ],
//   },
//   {
//     element: <AuthLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/auth",
//         element: <AuthFrame />,
//         children: [
//           {
//             path: "/auth/sign",
//             element: <AuthRegLogFrame />,
//             children: [
//               {
//                 index: true,
//                 element: <Navigate to={"/auth/sign/register"} />,
//               },
//               {
//                 path: "/auth/sign/login",
//                 element: <LoginUI />,
//               },
//               {
//                 path: "/auth/sign/register",
//                 element: <RegisterUI />,
//               },
//             ],
//           },
//           {
//             path: "/auth/account-verification",
//             element: isAuthenticated ? <AuthAccountVerification /> : <Navigate to={"/auth/sign/login"} />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     element: (
//       <React.Suspense fallback={<Spinner />}>
//         <AppLayout />
//       </React.Suspense>
//     ),
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/feeds",
//         element: (
//           <React.Suspense fallback={<Spinner />}>
//             <FeedsUI />
//           </React.Suspense>
//         ),
//         children: [
//           {
//             index: true,
//             element: <Navigate to={"/feeds/all"} />,
//           },
//           {
//             path: "/feeds/all",
//             element: (
//               <React.Suspense fallback={<Spinner />}>
//                 <FeedsForYouContentUI />
//               </React.Suspense>
//             ),
//           },
//           {
//             path: "/feeds/featured",
//             element: (
//               <React.Suspense fallback={<Spinner />}>
//                 <FeedsFeaturedContentUI />
//               </React.Suspense>
//             ),
//           },
//           {
//             path: "/feeds/recent",
//             element: (
//               <React.Suspense fallback={<Spinner />}>
//                 <FeedsRecentContentUI />
//               </React.Suspense>
//             ),
//           },
//         ],
//       },
//       {
//         path: "/article",
//         element: (
//           <React.Suspense fallback={<Spinner />}>
//             <PublishArticleLayout />
//           </React.Suspense>
//         ),
//         children: [
//           {
//             path: "/article/publish",
//             element: (
//               <React.Suspense fallback={<Spinner />}>
//                 <CreatePostUI />
//               </React.Suspense>
//             ),
//           },
//           {
//             path: "/article/preview",
//             element: (
//               <React.Suspense fallback={<Spinner />}>
//                 <PreviewArticleUI />
//               </React.Suspense>
//             ),
//           },
//         ],
//       },
//       {
//         path: "/analytics",
//         element: (
//           <React.Suspense fallback={<Spinner />}>
//             <AnalyticsUI />
//           </React.Suspense>
//         ),
//         children: [
//           {
//             index: true,
//             element: (
//               <React.Suspense fallback={<Spinner />}>
//                 <AnalyticsAllArticleUI />
//               </React.Suspense>
//             ),
//           },
//           {
//             path: "/analytics/:id",
//             element: (
//               <React.Suspense fallback={<Spinner />}>
//                 <AnalyticsEachArticleUI />
//               </React.Suspense>
//             ),
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default router;
