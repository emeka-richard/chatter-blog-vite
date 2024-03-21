import React, { useEffect, useState } from "react";
import style from "./feeds-UI.module.css";
// import graceIMG from "../../../assets/images/grace-article-img.png";
// import graceAVI from "../../../assets/images/user-3.png";
import ArticleUI from "./Article-UI";
// import { WriterProps } from "./Feeds-WriterProps";
import { PostData } from "./Feeds-ForYou-Content-UI";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestoreDB } from "../../../Firebase-Tools/firebase";
import Spinner from "../../../middlewares/Spinner/Spinner";

const FeedsRecentContentUI: React.FC = function () {
  // Message to display when there are no recent articles
  const noItemMsg: string = "recent";

  const [recentArticle, setRecentArticle] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Function to fetch the featured article
    const fetchFeaturedArticle = async () => {
      try {
        const postsCollectionRef = collection(firestoreDB , "posts"); // Replace "your_document_id" with the actual document ID
        const postRetrievedData = await getDocs(query(postsCollectionRef, orderBy("publicationTime", "desc")));
        const postsData: PostData[] = postRetrievedData.docs.map((doc) => ({ ...doc.data() })) as PostData[];
        setRecentArticle(postsData);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching featured article:", error);
      }
    };

    fetchFeaturedArticle(); // Call the function to fetch the featured article
  }, []);


  if (isLoading) {
    // Render loading indicator while authentication state is being checked
    return <Spinner />;
  }


  return (
    <>
      {recentArticle.length ? (
        recentArticle.map((article) => (
          <section key={article.authorId} className={style._wrapper}>
            {/* Render the ArticleUI component for each article */}
            <ArticleUI article={article} />
          </section>
        ))
      ) : (
        <section className={style._no_article_wrapper}>
          {/* Display a message when there are no recent articles */}
          <p className={style._no_article_p}>
            There's no {noItemMsg} publication available at the moment. Check later 👍
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsRecentContentUI;
