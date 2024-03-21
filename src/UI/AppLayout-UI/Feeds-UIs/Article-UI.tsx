import React from "react";
import style from "./feeds-UI.module.css";
// import DOMPurify from 'dompurify';
import OpenBookIcon from "../../../assets/svg/openbook.svg?react";
import CommentIcon from "../../../assets/svg/commentIcon.svg?react";
import LikeIcon from "../../../assets/svg/heartLoveIcon.svg?react";
import DarkChart from "../../../assets/svg/darkClearChartIcon.svg?react";
import { PostData } from "./Feeds-ForYou-Content-UI";
import defaultUser from "../../../assets/images/defaultUser.png"
import MDEditor from "@uiw/react-md-editor";
import "../Create-Article-UIs/mdeditor.css"
import getDate from "../../../middlewares/GetDate";
import getShortenedSentence from "../../../middlewares/GetShortenParagraph";
// "./preview.module.css";


interface ArticleUIProps {
  article: PostData;
}

const ArticleUI: React.FC<ArticleUIProps> = function ({ article }) {
    // const sanitizedOpenBookIconSVG = DOMPurify.sanitize(OpenBookIcon);
    // const sanitizedCommentIconSVG = DOMPurify.sanitize(CommentIcon);
    // const sanitizedLikeIconSVG = DOMPurify.sanitize(LikeIcon);
    // const sanitizedDarkChartSVG = DOMPurify.sanitize(DarkChart);

  return (
    <>
      <div className={style._inner_wrapper}>
        <header className={style._header_container}>
          {/* Writer information */}
          <div className={style._writer_infos_container}>
            <img
              src={!article.writerAVI ? defaultUser : article.writerAVI}
              alt=""
              // alt={`${getInitials(article.authorName)}`}
              className={style._writer_img }
            />
            <div className={style._writerTxt_infos}>
              <h3 className={style._writerTxt_h3}>{article.authorName}</h3>
              <p className={style._writerTxt_p}>
                {article.occupation} .{getDate(article.publicationTime)}
              </p>
            </div>
          </div>
          {/* Article title and read time */}
          <h1 className={style._article_title}>
            {article.articleTitle}
          </h1>
          <div className={style._article_readTime_container}>
            <OpenBookIcon />
          {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedOpenBookIconSVG }} aria-hidden="true"/> */}

            <small className={style._article_readTime}>
              {article.readingTime} mins read
            </small>
          </div>
        </header>
        {/* Article content and properties */}
        <article className={style._article_container}>
        <MDEditor.Markdown source={article.articleContent && getShortenedSentence(article.articleContent)} />

          {/* <p className={style._article_main}>{article.articleContent && getShortenedSentence(article.articleContent)}</p> */}
          <div
            className={style._article_img_div}
            style={{ backgroundImage: `url(${article.articleCoverImgUrl})` }}
            role="img" // Indicate that the div contains an image for screen readers
            aria-label="Article image" // Provide a label for the image
          ></div>
          <div className={style._article_props_wrapper}>
            {/* Comments count */}
            <div className={style._article_comment_prop_container}>
              <CommentIcon />
                {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedCommentIconSVG }} aria-hidden="true"/> */}

              <p className={style._article_comment_prop}>
                {article.articleComments}
              </p>
            </div>
            {/* Likes count */}
            <div className={style._article_likes_prop_container}>
              <LikeIcon />
            {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedLikeIconSVG }} aria-hidden="true"/> */}

              <p className={style._article_likes_prop}>
                {article.articleLikes}
              </p>
            </div>
            {/* Views count */}
            <div
              title="View post analytics"
              className={style._article_views_prop_container}
            >
              <DarkChart />
              {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedDarkChartSVG }} aria-hidden="true"/> */}

              <p className={style._article_views_prop}>
                {article.articleViews}
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleUI;
