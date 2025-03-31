import { INewsItem } from "@/models/INewsItem"
import { FC } from "react";
import styles from "./newsCard.module.scss"
import { Link } from "react-router-dom";

interface  INewsCardProps {
  item : INewsItem
}

export const NewsCard: FC<INewsCardProps> = ({item}) =>  {

const imgStyle = {
  backgroundImage: `url('${item.imageUrl}')`
}

  return (
    <Link to={`/${item.id}`}>
      <div className={styles.newsCard}>
       <div className={styles.image} style ={imgStyle}></div>
       <article className={styles.article}>
         <h3>{item.title}</h3>
          <p>{item.content.slice(0, 96) + "..."}</p>
      </article>
      </div>
    </Link>
  )
}


