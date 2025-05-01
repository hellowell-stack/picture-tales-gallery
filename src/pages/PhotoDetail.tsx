
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPhotoById } from "../data/albums";
import Layout from "../components/Layout";
import { ChevronLeft } from "lucide-react";

const PhotoDetail = () => {
  const { photoId, albumId } = useParams<{ photoId: string; albumId: string }>();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  
  const photo = photoId ? getPhotoById(photoId) : undefined;

  useEffect(() => {
    if (!photo || photo.albumId !== albumId) {
      navigate(`/albums/${albumId}`, { replace: true });
      return;
    }
    
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, [photo, albumId, navigate]);

  if (!photo) return null;

  return (
    <Layout>
      <div className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm mb-8 hover:text-gray-600"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to album
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <img 
              src={`https://images.unsplash.com/${photo.image}`} 
              alt={photo.title}
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold mb-2">{photo.title}</h1>
            <p className="text-gray-500 text-sm mb-6">{photo.date}</p>
            
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-2">Description</h2>
              <p className="text-gray-600">{photo.description}</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-2">The Story Behind the Photo</h2>
              <p className="text-gray-600 leading-relaxed">{photo.story}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhotoDetail;
