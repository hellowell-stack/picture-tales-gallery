
import { Link } from "react-router-dom";

interface PhotoCardProps {
  id: string;
  albumId: string;
  title: string;
  image: string;
}

const PhotoCard = ({ id, albumId, title, image }: PhotoCardProps) => {
  return (
    <Link to={`/albums/${albumId}/photos/${id}`} className="photo-card">
      <img 
        src={`https://images.unsplash.com/${image}`} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="overlay">
        <div className="bg-white bg-opacity-90 p-3 rounded-md w-full">
          <h4 className="text-base font-medium">{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
