import React, { useEffect, useState } from "react";
import style from "./analytics.module.css";
// import DOMPurify from 'dompurify';
// import OpenBookIcon from "../../../assets/svg/openbook.svg";
import { NavLink } from "react-router-dom";
// import { writerProps, WriterProps } from "../Feeds-UIs/Feeds-WriterProps";
// import DOMPurify from 'dompurify';
import OpenBookIcon from "../../../assets/svg/openbook.svg?react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../../Firebase-Tools/firebase";
import Spinner from "../../../middlewares/Spinner/Spinner";
import { PostData } from "../Feeds-UIs/Feeds-ForYou-Content-UI";
import defaultUser from "../../../assets/images/defaultUser.png"
import MDEditor from "@uiw/react-md-editor";
import getShortenedSentence from "../../../middlewares/GetShortenParagraph";
import "../Create-Article-UIs/mdeditor.css"




// const sanitizedOpenBookIconSVG = DOMPurify.sanitize(OpenBookIcon);

const AnalyticsAllArticleUI: React.FC = () => {

    // const sanitizedOpenBookIconSVG = DOMPurify.sanitize(OpenBookIcon);


    const [analyticsArray, setAnalyticsArray] = useState<PostData[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const postsCollectionRef = collection(firestoreDB , "posts")


    useEffect(()=>{
        const getPosts = async () => {
            try {
              const postRetrievedData = await getDocs(postsCollectionRef);
              const postsData: PostData[] = postRetrievedData.docs.map((doc) => ({id: doc.id, ...doc.data() })) as PostData[];
              setAnalyticsArray(postsData);
              setIsLoading(false)
            } catch (error) {
              console.error("Error fetching posts:", error);
            }
          };
      
          getPosts();        
    }, [])

    // Function to handle triggering each post activity
    // const handleEachPostActivityTrigger = () => {
    //     // Implement functionality here if needed
    // };

    if (isLoading) {
        // Render loading indicator while authentication state is being checked
        return <Spinner />;
      }
    

    return (
        <>
            {/* Map over each article to display analytics */}
            {analyticsArray.map((article: PostData) => (
                <article className={style.analytics_all_articles_wrapper} key={article.id}>
                    {/* Display writer avatar */}
                    <img
                        src={!article.writerAVI ? defaultUser : article.writerAVI}
                        alt="Writer Avatar"
                        className={style.analytics_all_articles_img}
                    />
                    <div className={style.analytics_all_articles_container}>
                        <div className={style.analytics_all_articles_inner_container}>
                            {/* Display article title */}
                            <h1 className={style.analytics_all_articles_h1}>
                                {article.articleTitle}
                            </h1>
                            {/* Display article reading time */}
                            <div className={style.analytics_all_articles_readTime_container}>
                            <OpenBookIcon />
                            {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedOpenBookIconSVG }} aria-hidden="true" /> */}
                                <small className={style.analytics_all_articles_readTime_small}>
                                    {article.readingTime} mins read
                                </small>
                            </div>
                            {/* Display article summary */}
                            {/* <p className={style.analytics_all_articles_p}>
                                {article.articleContent?.split(".", 2).join(".") + "."}
                            </p> */}
                            <MDEditor.Markdown source={article.articleContent && getShortenedSentence(article.articleContent)} />
                        </div>
                        {/* Link to view post activity */}
                        <NavLink
                            to={`/analytics/${article.id}`}
                            className={style.analytics_all_articles_btn}
                            // onClick={handleEachPostActivityTrigger}
                        >
                            View post activity
                        </NavLink>
                    </div>
                </article>
            ))}
        </>
    );
};

export default AnalyticsAllArticleUI;
