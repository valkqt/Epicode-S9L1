import css from "./FunctionalComponent.module.css";

const FunctionalComponent = function ({ action, buttonDesc, src }) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={action}>{buttonDesc}</button>
      <img src={src} className={css.img}/>
    </div>
  );
};

export default FunctionalComponent;
