import React, { useEffect, useState } from "react";
import style from "./feeds-UI.module.css";
import ArticleUI from "./Article-UI";
import { PostData } from "./Feeds-ForYou-Content-UI";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDB } from "../../../Firebase-Tools/firebase";
import Spinner from "../../../middlewares/Spinner/Spinner";

const FeedsFeaturedContentUI: React.FC = function () {
  // Message to display when there are no featured articles
  const noItemMsg: string = "featured";
  const [featuredArticle, setFeaturedArticle] = useState<PostData[] >([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Function to fetch the featured article
    const fetchFeaturedArticle = async () => {
      try {
        const postsCollectionRef = collection(firestoreDB , "posts"); // Replace "your_document_id" with the actual document ID
        const postRetrievedData = await getDocs(query(postsCollectionRef, where("featuredArticle", "==", true)));
        const postsData: PostData[] = postRetrievedData.docs.map((doc) => ({ ...doc.data() })) as PostData[];
        setFeaturedArticle(postsData);
        console.log(postsData);
        setIsLoading(false)

        // const docRef = doc(firestoreDB, "posts", "your_document_id"); // Replace "your_document_id" with the actual document ID
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //   setFeaturedArticle(docSnap.data() as PostData); // Assuming WriterProps is the correct type for your article data
        // } else {
        //   console.log("No such document!");
        // }
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
      {featuredArticle.length ? (
        featuredArticle.map((article) => (
          <section key={article.authorId} className={style._wrapper}>
            {/* Render the ArticleUI component for each featured article */}
            <ArticleUI article={article} />
          </section>
        ))
      ) : (
        <section className={style._no_article_wrapper}>
          {/* Display a message when there are no featured articles */}
          <p className={style._no_article_p}>
            There's no {noItemMsg} publication available at the moment. Check later 👍
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsFeaturedContentUI;
