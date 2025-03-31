import {Route, Routes} from "react-router-dom"
import { NewsItemPage } from "./pages/NewsItemPage";
import styles from './app.module.scss';
import { MainPage } from "@/pages/MainPage";
import { EditNewsPage } from "./pages/EditNewsPage";

function App() {

  return (
  <div className={styles.appMobileWrapper}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/new" element={<EditNewsPage formTitle={ "Добавить новость" } />} />
      <Route path="/:id">
        <Route index element={<NewsItemPage />} />
        <Route path="edit" element={<EditNewsPage formTitle={ "Редактировать новость" } />} />
      </Route>
    </Routes>

  </div>
  )
}

export default App
