
const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t mt-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Picture Tales Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
