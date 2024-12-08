import React from "react";

// Define the type for the props
interface FurnitureGalleryProps {
  backgroundImage?: string; // Optional background image URL (string)
}

const FurnitureGallery: React.FC<FurnitureGalleryProps> = ({ backgroundImage }) => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-lg font-bold text-gray-500 uppercase tracking-wide">
          Share your setup with
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-800">
          #FuniroFurniture
        </h3>
      </div>

      {/* Image Section */}
      <div
        id="furniture"
        className="relative h-96 sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg bg-gray-200 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use dynamic background image URL
        }}
        aria-label="Furniture Showcase"
      >
        {/* You can add more elements inside this div if you wish */}
      </div>
    </section>
  );
};

// Default Props (for default background image URL)
FurnitureGallery.defaultProps = {
  backgroundImage: "/Images/background.jpg", // Default image
};

export default FurnitureGallery;
