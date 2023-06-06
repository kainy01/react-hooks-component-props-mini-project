import React from "react";
import Article from "./Article";

export default function ArticleList(props) {

  const articleList = props.posts.map((article) => {
    return (
      <Article
        key={article.id}
        preview={article.preview}
        date={article.date}
        title={article.title}
      />
    );
  });
  return <main>{articleList}</main>;
}
