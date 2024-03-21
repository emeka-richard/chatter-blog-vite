import React from "react";

const RegisterUI = React.lazy(
  () => import("../UI/AuthPage-UI/RegisterUIs/Register-UI")
);
const AuthFrame = React.lazy(
  () => import("../layouts/AuthLayout-layouts/Auth-Frame")
);
const LoginUI = React.lazy(() => import("../UI/AuthPage-UI/Login-UI/Login-UI"));
const FeedsForYouContentUI = React.lazy(
  () => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-ForYou-Content-UI")
);
const FeedsFeaturedContentUI = React.lazy(
  () => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-Featured-Content-UI")
);
const FeedsRecentContentUI = React.lazy(
  () => import("../UI/AppLayout-UI/Feeds-UIs/Feed-Recent-Content-UI")
);
const CreatePostUI = React.lazy(
  () => import("../UI/AppLayout-UI/Create-Article-UIs/Create-Post-UI")
);
const PreviewArticleUI = React.lazy(
  () => import("../UI/AppLayout-UI/Create-Article-UIs/Preview-Article-UI")
);
const AnalyticsAllArticleUI = React.lazy(
  () => import("../UI/AppLayout-UI/Analytics-UIs/Analytics-All-Articles-UI")
);
const AnalyticsEachArticleUI = React.lazy(
  () => import("../UI/AppLayout-UI/Analytics-UIs/Analytics-Each-Article-UI")
);

export {
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
};
