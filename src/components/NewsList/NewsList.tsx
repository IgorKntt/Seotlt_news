
import { FC, useContext } from "react";
import { NewsCard } from "@/components/NewsCard/NewsCard";
import { NewsContext } from "@/context/NewsContext";




export const NewsList:FC = () => {

  const {newsList} = useContext(NewsContext);

  if (!newsList) return <h1>Список новостей пуст</h1>

  return (
    <div>
      {newsList.map(item =>
         <NewsCard key={item.id} item = {item} />
      )}
    </div>
  )
}
