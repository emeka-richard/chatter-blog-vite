import React, { createContext, useState } from "react";
import style from "./layouts.module.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "../Firebase-Tools/firebase";
import useAuthVerifyUser from "../middlewares/isAuthenticated"
import Spinner from "../middlewares/Spinner/Spinner";



// Define the ArticleData interface
interface ArticleData {
  coverImgUrl: string | null;
  articleTag: string[] | null;
  articleTitle: string | null;
  articleContent: string | undefined;
}

// Define the ArticleContextType interface
interface ArticleContextType {
  articleData: ArticleData;
  setArticleData: React.Dispatch<React.SetStateAction<ArticleData>>;
}

// Create ArticleContext
export const ArticleContext = createContext<ArticleContextType | undefined>(
  undefined
);

const PublishArticleLayout: React.FC = () => {
  const { currentUser } = useAuthVerifyUser()
  const location = useLocation();
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState<ArticleData>({
    coverImgUrl: "",
    articleTag: [],
    articleTitle: "",
    articleContent: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const postsCollectionRef = collection(firestoreDB, "posts")

  // Function to handle action button click
  const handleActionClick = (buttonName: string) => {
    if (!articleData.articleContent) return;
    if (buttonName === "preview") {
      navigate("/article/preview");
    }
    if (buttonName === "edit") {
      navigate("/article/publish");
    }
    if (buttonName === "publish") {
      setIsLoading(true);

      addDoc(postsCollectionRef, {
        authorId: currentUser?.uid,
        authorName: currentUser?.displayName,
        articleCoverImgUrl: articleData.coverImgUrl,
        articleTag: articleData.articleTag,
        articleTitle: articleData.articleTitle,
        articleContent: articleData.articleContent,
        writerAVI: "",
        occupation: "",
        publicationTime: new Date(),
        readingTime: "",
        articleComments: 240,
        articleLikes: 3,
        articleViews: 300,
        authorFollowers: "",
        profileVisit: 7,
        postList:3,
        featuredArticle: true,
      }).then(()=>{
        setArticleData({
          coverImgUrl: "",
          articleTag: [],
          articleTitle: "",
          articleContent: "",      
        })
        navigate("/feeds")
      }).catch((error)=>{
        console.error(error)
      })
    }
  };

  if (isLoading) {
    // Render loading indicator while authentication state is being checked
    return <Spinner />;
  }


  return (
    <div className={style.create_post_wrapper}>
      <section className={style.create_post_container}>
        {/* Provide ArticleContext value */}
        <ArticleContext.Provider value={{ articleData, setArticleData }}>
          <div className={style.create_post_header_btns_container}>
            {location.pathname.includes("preview") && (
              <button
                onClick={() => handleActionClick("edit")}
                className={style.create_post_header_btn_edit}
                tabIndex={0} // Make the button focusable
                aria-label="Edit"
              >
                Edit
              </button>
            )}
            <div className={style.create_post_header_btns_right}>
              {!location.pathname.includes("preview") && (
                <button
                  onClick={() => handleActionClick("preview")}
                  className={
                    articleData.articleContent
                      ? style.create_post_header_btn_preview
                      : style.create_post_header_btn_disabled
                  }
                  tabIndex={0} // Make the button focusable
                  aria-label="Preview"
                  disabled={!articleData.articleContent} // Disable button if content is not available
                >
                  Preview
                </button>
              )}
              <button
                onClick={() => handleActionClick("publish")}
                className={
                  articleData.articleContent
                    ? style.create_post_header_btn_publish
                    : style.create_post_header_btn_disabled
                }
                tabIndex={0} // Make the button focusable
                aria-label="Publish"
                disabled={!articleData.articleContent} // Disable button if content is not available
              >
                Publish
              </button>
            </div>
          </div>
          <Outlet />
        </ArticleContext.Provider>
      </section>
    </div>
  );
};

export default PublishArticleLayout;
