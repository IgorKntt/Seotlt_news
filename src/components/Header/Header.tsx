
import { FC } from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";

interface IHeaderProps {
  hideButton?:boolean;
}

export const Header:FC<IHeaderProps> = ({hideButton}) => {

  return (
    <header className={styles.mainHeader}>
      <Link to={"/"}>
        <img src="https://seotlt.ru/img/seotlt_logo.svg" alt="Logo" />
      </Link>
      {!hideButton ? <Link to={"/new"}><button>Добавить новость</button></Link>: ""}
    </header>
  )
}
