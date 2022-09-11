import { BiTime } from "react-icons/bi";
import { Movie } from "./movieData";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { src, main, runtime, title } = movie;
  return (
    <div className="cart">
      <img src={src} className="w-full" />
      <div className="p-4 text-white">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="badge">
        <BiTime />
        <p>{runtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
