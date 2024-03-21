import React, { useEffect, useState } from "react";
import style from "./analytics.module.css";
import { useParams } from "react-router-dom";
import ArticleUI from "../Feeds-UIs/Article-UI";
import { doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../../../Firebase-Tools/firebase";
import { PostData } from "../Feeds-UIs/Feeds-ForYou-Content-UI";
import getDate from "../../../middlewares/GetDate";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}


const AnalyticsArticleUI: React.FC = function () {
  const { id } = useParams<RouteParams>();
  const [eachArticleAnalytics, setEachArticleAnalytics] = useState<PostData>()

  useEffect(()=>{
    const fetchEachArticle = async()=>{
    try {
      if(id){
        const docRef = doc(firestoreDB, "posts", id); // Replace "your_document_id" with the actual document ID
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEachArticleAnalytics(docSnap.data() as PostData); // Assuming WriterProps is the correct type for your article data
        } else {
          console.log("No such document!");
        }
      }
    } catch (error) {
        if(error) {
            console.error(error)
            // throw new Error(error)
        }
    }
  }

  fetchEachArticle()
  })

//   const writerPropsArray = writerProps

// // Find the writerProps that matches the id parameter
// const eachArticleAnalytics = writerPropsArray.find(
//     (writerProp: WriterProps) => writerProp.id === Number(id)
//   ) as WriterProps | undefined;
  
  return (
    <>
      {eachArticleAnalytics && (
        <section className={style.analytics_each_article_wrapper}>
          <div className={style.analytics_each_article_header_container}>
            <div className={style.analytics_each_article_header_1_container}>
              <h1 className={style.analytics_each_article_header_1_h1}>
                Post Analytics
              </h1>
              <h2 className={style.analytics_each_article_header_1_h2}>
                {getDate(eachArticleAnalytics.publicationTime)}
              </h2>
            </div>
            <div className={style.analytics_each_article_header_2_container}>
              <h3 className={style.analytics_each_article_header_2_h3}>
                Post highlights
              </h3>
              <p className={style.analytics_each_article_header_2_p}>
                Top posts{" "}
                <span className={style.analytics_each_article_header_2_span}>
                  earned {eachArticleAnalytics.articleViews ?? 0} impression
                </span>
              </p>
            </div>
          </div>
          <ArticleUI article={eachArticleAnalytics} />
          <section className={style.analytics_each_article_buttom_container}>
            <div className={style.analytics_each_article_buttom_1_container}>
              <h1 className={style.analytics_each_article_buttom_1_h1}>
                Post summary
              </h1>
              <p className={style.analytics_each_article_buttom_1_p}>
                {getDate(eachArticleAnalytics.publicationTime) ?? 'Unknown time'}
              </p>
            </div>
            <div className={style.analytics_each_article_buttom_2_container}>
              <div className={style.analytics_each_article_buttom_2_post_container}>
                <h2 className={style.analytics_each_article_buttom_2_post_h2}>
                  Posts
                </h2>
                <p className={style.analytics_each_article_buttom_2_post_p}>
                  {"Non-Zero"}
                </p>
              </div>
              <div className={style.analytics_each_article_buttom_2_impression_container}>
                <h2 className={style.analytics_each_article_buttom_2_impression_h2}>
                  Posts Impression
                </h2>
                <p className={style.analytics_each_article_buttom_2_impression_p}>
                  {eachArticleAnalytics.articleViews ?? 0}
                </p>
              </div>
              <div className={style.analytics_each_article_buttom_2_visits_container}>
                <h2 className={style.analytics_each_article_buttom_2_visit_h2}>
                  Profile Visits
                </h2>
                <p className={style.analytics_each_article_buttom_2_visit_p}>
                  {eachArticleAnalytics.profileVisit ?? 0}
                </p>
              </div>
              <div className={style.analytics_each_article_buttom_2_followers_container}>
                <h2 className={style.analytics_each_article_buttom_2_followers_h2}>
                  Followers
                </h2>
                <p className={style.analytics_each_article_buttom_2_followers_p}>
                  {eachArticleAnalytics.authorFollowers?.length ?? 0}
                </p>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default AnalyticsArticleUI;
