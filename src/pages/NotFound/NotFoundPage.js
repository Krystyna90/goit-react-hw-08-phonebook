import notFound from "images/notFound.jpg";
import css from "./NotFound.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <img className={css.NotFoundImg} src={notFound} alt="Not found"></img>
    </div>
  );
}
