import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NewsList } from "@/components/NewsList/NewsList"
import { FC } from "react";


export const MainPage:FC = () => {

  return (
    <>
      <Header />
      <NewsList />
      <Footer />
    </>
  )
}
