import React, { useRef, useState, ChangeEvent, useContext } from "react";
import style from "./create-article-UI.module.css";
import { ArticleContext } from "../../../layouts/PublishArticleLayout";
import Select, {MultiValue} from "react-select";
// import { OptionTypeBase } from "react-select/src/types";
import makeAnimated from "react-select/animated";
// import DOMPurify from "dompurify";

import ImgIcon from "../../../assets/svg/imgIcon.svg?react";
import VidIcon from "../../../assets/svg/vidIcon.svg?react";
import PlusIcon from "../../../assets/svg/plusIcon.svg?react";
import TimesIcon from "../../../assets/svg/timesIcon.svg?react";

const animatedComponents = makeAnimated();

// Define the type of the selected options
type OptionType = {
  value: string;
  label: string;
};


const CreatePostUI: React.FC = () => {
  // const sanitizedImgIconSVG = DOMPurify.sanitize(ImgIcon);
  // const sanitizedVidIconSVG = DOMPurify.sanitize(VidIcon);
  // const sanitizedPlusIconSVG = DOMPurify.sanitize(PlusIcon);
  // const sanitizedTimesIconSVG = DOMPurify.sanitize(TimesIcon);

  const articleProps = useContext(ArticleContext);

  // Ensure the ArticleContext is provided
  if (!articleProps) {
    throw new Error("useContext must be used within a Provider");
  }

  // Destructure the articleData and setArticleData from the context
  const { articleData, setArticleData } = articleProps;

  // State variables
  const [openMediaSelect, setOpenMediaSelect] = useState<boolean>(false);
  const imgRef = useRef<HTMLInputElement | null>(null);

  const articleTags = [
    { value: "Programming", label: "Programming" },
    { value: "Data Science", label: "Data Science" },
    { value: "Technology", label: "Technology" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Politics", label: "Politics" },
  ];

  // Handlers for opening media select and triggering image upload
  const handleOpenMediaSelect = () => {
    setOpenMediaSelect(!openMediaSelect);
  };

  const handleImgTrigger = () => {
    setOpenMediaSelect(!openMediaSelect);
    imgRef.current?.click();
  };

  // Handler for uploading image
  const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgUrl = reader.result as string;
        // Update articleData with the new image URL
        setArticleData({ ...articleData, coverImgUrl: imgUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for selecting tags
  const handleSelectedItems = (selectedOptions: MultiValue<OptionType>) => {
    const tags = selectedOptions.map((option: OptionType) => option.value);
    // Update articleData with selected tags
    setArticleData({ ...articleData, articleTag: tags });
  };

  // Handler for updating article title
  const handleTextTitle = (title: string) => {
    // Update articleData with the new title
    setArticleData({ ...articleData, articleTitle: title });
  };

  // Handler for updating article content
  const handleTextContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    // Update articleData with the new content
    setArticleData({ ...articleData, articleContent: content });
  };

  // Styles for Select component
  //   const colourStyles = {
  //     control: (styles: StylesType) => ({ ...styles, backgroundColor: "white" }),
  //     placeholder: (styles: StylesType) => ({ ...styles, backgroundColor: "white" }),
  //     singleValue: (styles: StylesType) => ({ ...styles, backgroundColor: "white" }),
  //   };

  return (
    <div className={style.create_post_body}>
      <div className={style.create_post_body_img_tag_container}>
        <div className={style.create_post_body_img_btn_container}>
          <div
            onClick={handleOpenMediaSelect}
            className={
              openMediaSelect
                ? style.show
                : style.create_post_body_img_add_svg_container
            }
            tabIndex={0} // Make it focusable
            role="button" // Indicate it as a button
            aria-label="Add media"
          >
            <PlusIcon />
            {/* <svg
              dangerouslySetInnerHTML={{ __html: sanitizedPlusIconSVG }}
              aria-hidden="true"
            /> */}
          </div>
          <input
            ref={imgRef}
            id="form_img"
            type="file"
            onChange={handleImgUpload}
            style={{ display: "none" }}
            accept="image/png, image/jpg, image/jpeg"
          />
          <div
            className={
              openMediaSelect
                ? style.create_post_body_img_cancel_btn_container
                : style.show
            }
          >
            <div
              onClick={handleOpenMediaSelect}
              className={style.create_post_body_img_cancel_svg_container}
              tabIndex={0} // Make it focusable
              role="button" // Indicate it as a button
              aria-label="Cancel"
            >
              <TimesIcon />
              {/* <svg
                dangerouslySetInnerHTML={{ __html: sanitizedTimesIconSVG }}
                aria-hidden="true"
              /> */}
            </div>
          </div>
          <div
            className={
              openMediaSelect ? style.create_post_media_container : style.show
            }
          >
            <div
              onClick={handleImgTrigger}
              className={style.create_post_media_img}
              tabIndex={0} // Make it focusable
              role="button" // Indicate it as a button
              aria-label="Add image"
            >
              <ImgIcon />
              {/* <svg
                dangerouslySetInnerHTML={{ __html: sanitizedImgIconSVG }}
                aria-hidden="true"
              /> */}
            </div>
            <div className={style.create_post_media_video}>
              <VidIcon />
              {/* <svg
                dangerouslySetInnerHTML={{ __html: sanitizedVidIconSVG }}
                aria-hidden="true"
              /> */}
            </div>
          </div>
        </div>
        <div className={style.create_post_body_tag_container}>
          <div className={style.create_post_body_tag_inner_container}>
            <h3 className={style.create_post_body_tag_h3}>Tag: </h3>
            {/* Select component for choosing multiple tags */}
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={articleTags[0]}
              isMulti
              options={articleTags}
              onChange={handleSelectedItems}
              //   styles={colourStyles}
              aria-label="Choose tags"
            />
          </div>
        </div>
      </div>
      {articleData.coverImgUrl && (
        <div
          style={{ backgroundImage: `url(${articleData.coverImgUrl})` }}
          className={style.img_holder}
          tabIndex={0} // Make it focusable
          aria-label="Uploaded image preview"
        ></div>
      )}
      <div className={style.create_post_input_wrapper}>
        <div className={style.create_post_input_container}>
          <input
            id="form_title"
            type="text"
            placeholder="Title"
            className={style.create_post_input_title}
            value={articleData.articleTitle ?? ""}
            onChange={(e) => handleTextTitle(e.target.value)}
            aria-label="Article title"
          />
          <textarea
            id="form_notes"
            placeholder="Write a post......."
            className={style.create_post_input_note}
            value={articleData.articleContent}
            onChange={handleTextContent}
            aria-label="Article content"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CreatePostUI;
