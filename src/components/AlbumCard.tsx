
import { Link } from "react-router-dom";

interface AlbumCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  photoCount: number;
}

const AlbumCard = ({ id, title, description, coverImage, photoCount }: AlbumCardProps) => {
  return (
    <Link to={`/albums/${id}`} className="album-card">
      <img 
        src={`https://images.unsplash.com/${coverImage}`} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="overlay">
        <div className="bg-white bg-opacity-90 p-4 w-full rounded-md">
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <span className="text-xs text-gray-500">{photoCount} photos</span>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
