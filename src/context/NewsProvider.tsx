import { useLocalStorage } from "@/hooks/useLocalStorage"
import { INewsItem } from "@/models/INewsItem"
import { initialNewsList } from "@/models/initialNews"
import { NewsContext } from "./NewsContext"
import { useMemo, ReactNode, FC} from "react"

interface INewsProviderProps {
  children: ReactNode;
}

export const NewsProvider:FC<INewsProviderProps> = ({children}) => {

  const [newsList, setNewsList ] = useLocalStorage<INewsItem[]>("NEWS_LIST", initialNewsList);

    const defaultProps = useMemo(() => {
      return {
        newsList: newsList,
        setNewsList: setNewsList
      }

    },[newsList])


  return (
    <NewsContext.Provider value={defaultProps}>
      {children}
    </NewsContext.Provider>
  )
}
