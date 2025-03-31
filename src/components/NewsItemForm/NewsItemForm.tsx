import { NewsContext } from "@/context/NewsContext";
import { INewsItem } from "@/models/INewsItem";
import { FC, FormEvent, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {v4 as uuidV4} from "uuid";
import styles from "./NewsItemForm.module.scss"

interface INewsItemForm {
  formTitle : string
}

export const NewsItemForm:FC<INewsItemForm> = ({formTitle}) => {

  const navigate = useNavigate();

  const params = useParams();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);

  const {newsList, setNewsList} = useContext(NewsContext);


  const handleSubmit = (e:FormEvent, itemId?:string) =>{
    e.preventDefault();
    if (!setNewsList) return

    const id = itemId ?? uuidV4();
    const title = titleRef.current?.value || "";
    const imageUrl = imageUrlRef.current?.value || "";
    const content = contentRef.current?.value || "";

    const newItem: INewsItem = {id, title, content, imageUrl};

    let nextNewsList;

    if (!itemId){
      nextNewsList = [...newsList!, newItem];
    } else {
      nextNewsList = newsList!.map(item => {
        if (item.id === itemId) {
          return newItem;
        }

        return item
      })
    }

    setNewsList(nextNewsList);
    navigate("/");
  }

  const handleCancel = (e:FormEvent) => {
    e.preventDefault();
    navigate("/");
  }

  let newsItem: INewsItem | null = null;

  if (params.id) {
    newsItem = newsList!.find(item => item.id === params.id) || newsItem;
  }

  return (<div className={styles.newsForm}>
    <h2>{formTitle}</h2>

    <form>
      <label htmlFor="titleInput">Заголовок
        <input ref={titleRef} type ="text" placeholder="Заголовок"
         defaultValue={newsItem?.title ? newsItem.title : ""} name="titleInput" />
      </label>

      <label htmlFor="imageUrlInput">Ссылка на картинку
        <input ref={imageUrlRef} type ="text" placeholder="Ссылка на картинку"
        defaultValue={newsItem?.imageUrl ? newsItem.imageUrl : ""} name="imageUrlInput"  />
      </label>

      <label htmlFor="imageUrlInput">Текст новости
        <textarea ref={contentRef} placeholder="Ссылка на картинку"
        defaultValue={newsItem?.content ? newsItem.content : ""} name="imageUrlInput" rows={20} />
      </label>

      <div className={styles.menu}>
        <input type="submit" value="Ok" onClick={(e) => handleSubmit(e, newsItem?.id )}/>
        <button onClick={handleCancel}>Отмена</button>
      </div>


    </form>

    </div>
  )
}
/*
return (<div className={styles.newsForm}>
  <h1>edit form</h1>

  <form onSubmit={handleSubmit} >
    <label htmlFor="titleInput">Заголовок
      <input ref={titleRef} type ="text" placeholder="Заголовок" name="titleInput" />
    </label>

    <label htmlFor="imageUrlInput">Ссылка на картинку
      <input ref={imageUrlRef} type ="text" placeholder="Ссылка на картинку" name="imageUrlInput"  />
    </label>

    <label htmlFor="imageUrlInput">Текст новости
      <textarea ref={contentRef} placeholder="Ссылка на картинку"
      name="imageUrlInput" rows={20} />
    </label>

    <div className={styles.menu}>
      <input type="submit" value="Ok" />
      <button onClick={() => navigate("/")}>Отмена</button>
    </div>


  </form>

  </div>
)

}
*/
