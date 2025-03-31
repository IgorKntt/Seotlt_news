
import { INewsItem } from "@/models/INewsItem";
import { createContext } from "react";


export interface NewsContextProps {
  newsList?:INewsItem[];
  setNewsList?: (newsList: INewsItem[]) => void;
}

export const NewsContext = createContext<NewsContextProps>({})
