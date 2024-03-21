import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./feeds-UI.module.css";
// import { writerProps } from "./Feeds-WriterProps"; // Assuming writerProps is imported from another file
import ArticleUI from "./Article-UI";
import { DocumentData, QueryDocumentSnapshot, collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { firestoreDB } from "../../../Firebase-Tools/firebase";
import Spinner from "../../../middlewares/Spinner/Spinner";

export interface PostData {
  id: string,
  authorId: string; // Assuming currentUser.uid is a string
  authorName: string; // Assuming currentUser.displayName is a string
  articleCoverImgUrl: string | null;
  articleTag: string[] | null; // You can replace `any` with the actual type for article tags
  articleTitle: string | null;
  articleContent: string | undefined;
  writerAVI: string | undefined; // Assuming it's a URL to the author's profile picture
  occupation: string; // Assuming the author's occupation is a string
  publicationTime: Date; // Assuming getDate() returns a string representing the publication time
  readingTime: number; // You can specify the format of the reading time (e.g., "5 min read")
  articleComments: number;
  articleLikes: number;
  articleViews: number;
  authorFollowers: string; // Assuming it's the number of author's followers or an array of follower IDs
  profileVisit: number;
  postList: number;
  featuredArticle: boolean,
}


const FeedsForYouContentUI: React.FC = function () {
  const postsCollectionRef = collection(firestoreDB , "posts")

  const [postList, setPostList] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData, DocumentData> | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = useCallback(async () => {
    if (loadingMore || !lastDoc) return;
    setLoadingMore(true);
    try {
      const querySnapshot = await getDocs(query(postsCollectionRef, orderBy("publicationTime", "desc"), startAfter(lastDoc), limit(10)));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as PostData[];
      setPostList((prevPosts) => [...prevPosts, ...data]);
      if (querySnapshot.docs.length > 0) {
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      } else {
        setLastDoc(null); // No more documents to load
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, lastDoc, postsCollectionRef]);


  useEffect(()=>{
    const getPosts = async () => {
      try {
        const postRetrievedData = await getDocs(query(postsCollectionRef, orderBy("publicationTime", "asc"), limit(10)));
        const postsData: PostData[] = postRetrievedData.docs.map((doc) => ({id: doc.id, ...doc.data() })) as PostData[];
        console.log(postsData)
        setPostList(postsData);
        setIsLoading(false)
        if (postRetrievedData.docs.length > 0) {
          setLastDoc(postRetrievedData.docs[postRetrievedData.docs.length - 1]);
        }
        return;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();  
  }, [])


  useEffect(() => {
    // Create an Intersection Observer to observe the sentinel element
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loadingMore && lastDoc) {
        loadMorePosts();
      }
    }, { threshold: 0 });

    // Start observing the sentinel element
    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    // Clean up the observer
    return () => {
      if (observer.current && sentinelRef.current) {
        observer.current.unobserve(sentinelRef.current);
      }
    };
  }, [lastDoc, loadingMore, loadMorePosts]);



  if (isLoading) {
    // Render loading indicator while authentication state is being checked
    return <Spinner />;
  }


  return (
    <>
      {postList.length ? (
        // If there are articles in writerProps, map through them and render ArticleUI component for each
        postList.map((article) => (
          <section data-testid="post-item" key={article.id} className={style._wrapper}>
            <ArticleUI article={article} />
          </section>
        ))
      ) : (
        // If there are no articles, display a message
        <section className={style._no_article_wrapper}>
          <p className={style._no_article_p}>
            There's no publication available at the moment. Create a post ✍🏼.
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsForYouContentUI;
