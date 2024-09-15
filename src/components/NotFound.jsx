import { Link } from 'next-view-transitions'

function NotFoundComponent({ found }) {
  return (
    <section className="text-center">
      <h1 className="text-[30px] font-bold py-6">{found}</h1>
      <span className="text-color_200">
        {"You can come back the "}
        <Link className="text-color_100 underline" href="/">
          Home
        </Link>
        {" again."}
      </span>
    </section>
  );
}

export default NotFoundComponent;
