import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { NewsItemForm } from "@/components/NewsItemForm/NewsItemForm"
import { FC } from "react"

interface IEditNewsPageProps{
  formTitle: string
}

export const EditNewsPage:FC<IEditNewsPageProps> = ({formTitle}) => {

  /*const params = useParams();
  console.log(params);*/

  return (
    <>
      <Header hideButton={true}/>
      <NewsItemForm formTitle = {formTitle} />
      <Footer />
    </>
  )

}
