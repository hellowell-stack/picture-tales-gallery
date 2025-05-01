
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAlbumById, getPhotosByAlbumId } from "../data/albums";
import Layout from "../components/Layout";
import PhotoCard from "../components/PhotoCard";
import { ChevronLeft } from "lucide-react";

const AlbumDetail = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  
  const album = albumId ? getAlbumById(albumId) : undefined;
  const photos = albumId ? getPhotosByAlbumId(albumId) : [];

  useEffect(() => {
    if (!album) {
      navigate("/albums", { replace: true });
      return;
    }
    
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, [album, navigate]);

  if (!album) return null;

  return (
    <Layout>
      <div className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm mb-8 hover:text-gray-600"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to albums
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end mb-12 gap-8">
          <div className="w-full md:w-1/3">
            <img 
              src={`https://images.unsplash.com/${album.coverImage}`} 
              alt={album.title}
              className="w-full h-64 md:h-96 object-cover rounded-md"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">{album.title}</h1>
            <p className="text-gray-600 mb-2">{album.description}</p>
            <p className="text-sm text-gray-500">{album.date} • {photos.length} photos</p>
          </div>
        </div>
        
        <div className="photo-grid">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              id={photo.id}
              albumId={photo.albumId}
              title={photo.title}
              image={photo.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AlbumDetail;
