import { FC, useContext } from "react";
import styles from "./NewsItemLayout.module.scss"
import { NewsContext } from "@/context/NewsContext";
import { Link, useNavigate } from "react-router-dom";



interface NewsItemLayoutProps {
  itemId: string;
}

export const NewsItemLayout:FC<NewsItemLayoutProps> = ({itemId}) => {

  const navigate = useNavigate()

  const {newsList, setNewsList} = useContext(NewsContext);
  if (!newsList || !setNewsList) {navigate("/"); return};

  const newsItem = newsList.find(item => item.id === itemId);

  if (!newsItem) {
   return <h1>Новость не найдена</h1>
  }

  const headerStyle = {
   backgroundImage: `url('${newsItem.imageUrl}')`
  }

   const handleDelete = (id: string) => {
      const nextNewsList = newsList.filter(item => item.id !== id);
      setNewsList(nextNewsList);
      navigate("/");
   }

  return (
    <>
    <div className ={styles.newsItemMain}>
      <header style={headerStyle}>
        <h3><span>{newsItem.title}</span></h3>
      </header>
      <p>{newsItem.content}</p>
      <div className={styles.menu}>
        <Link to={`/${itemId}/edit`}><button>Редактировать</button></Link>
        <button onClick={() => handleDelete(itemId) }>Удалить</button>
      </div>
    </div>

    </>
  )
}
