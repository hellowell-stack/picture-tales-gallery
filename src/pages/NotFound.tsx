
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          This page doesn't seem to exist
        </p>
        <a href="/" className="text-blue-600 hover:text-blue-800 underline">
          Return to Home
        </a>
      </div>
    </Layout>
  );
};

export default NotFound;
