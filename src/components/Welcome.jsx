import css from "./Welcome.module.css"

const Welcome = (props) => {
  return (
    <div className={css.container}>
      <h1>Benvenuto {props.name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, unde suscipit reiciendis doloribus fugit praesentium explicabo ut nisi, nostrum, natus cupiditate assumenda maxime animi dignissimos vero accusamus eaque rerum alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, minima. Assumenda excepturi ipsam cum numquam corrupti at voluptas saepe natus cupiditate tempora dolore enim, id officia inventore. Eveniet, corporis totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus reiciendis molestias exercitationem quasi repellat, animi perspiciatis consequuntur ipsum voluptate nulla sint ducimus. Quaerat in quia quisquam architecto fugiat, obcaecati suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, odio totam sequi ullam soluta recusandae, mollitia error quam nesciunt vitae consequatur eaque molestias, natus quae provident tempore nam excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, explicabo numquam illo, totam nisi ea corporis, suscipit cum eum maiores repellendus dicta aliquid eligendi eos enim vero tempore obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis, tempora deserunt, quis culpa ut reiciendis nulla distinctio veniam similique laboriosam labore debitis, id corrupti. Eius alias inventore odit quia? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  );
};

export default Welcome;
