
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NewsItemLayout } from "@/components/NewsItemLayout/NewsItemLayout";

import { FC } from "react";
import { useParams } from "react-router-dom"



export const NewsItemPage:FC = () => {

  const params = useParams();
  const newsItemId = params.id as string;


  return (
    <>
      <Header />
      <NewsItemLayout itemId ={newsItemId} />
      <Footer />
    </>
  )
}
