
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Album, Photo, getAlbums, photos } from "../data/albums";
import AlbumCard from "../components/AlbumCard";
import PhotoCard from "../components/PhotoCard";
import Layout from "../components/Layout";

const Home = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [featuredPhotos, setFeaturedPhotos] = useState<Photo[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Get all albums
    const allAlbums = getAlbums();
    
    // Get 3 random photos from different albums for the featured section
    const randomPhotos = [...photos]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    setAlbums(allAlbums);
    setFeaturedPhotos(randomPhotos);
    
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <Layout>
      <section className={`mb-12 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Picture Tales Gallery</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments and the stories behind them
          </p>
        </div>
      </section>

      <section className="mb-16 fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-medium">Featured Photos</h2>
          <Link to="/albums" className="text-sm text-gray-600 hover:text-gray-900">
            View all albums →
          </Link>
        </div>
        <div className="photo-grid">
          {featuredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              id={photo.id}
              albumId={photo.albumId}
              title={photo.title}
              image={photo.image}
            />
          ))}
        </div>
      </section>

      <section className="fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-medium">Albums</h2>
          <Link to="/albums" className="text-sm text-gray-600 hover:text-gray-900">
            View all albums →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              title={album.title}
              description={album.description}
              coverImage={album.coverImage}
              photoCount={photos.filter(photo => photo.albumId === album.id).length}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
