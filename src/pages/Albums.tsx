
import { useState, useEffect } from "react";
import { Album, getAlbums, photos } from "../data/albums";
import AlbumCard from "../components/AlbumCard";
import Layout from "../components/Layout";

const Albums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const allAlbums = getAlbums();
    setAlbums(allAlbums);
    
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <Layout>
      <section className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Albums</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collections of moments captured through my lens
          </p>
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

export default Albums;
