"use client"

import React, { useState } from 'react';

const MultiSelectImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    const updatedImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      file,
    }));

    setSelectedImages((prevImages) => [...prevImages, ...updatedImages]);
  };

  const removeImage = (id) => {
    setSelectedImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        {selectedImages.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.id}
              alt="Selected"
              className="w-64 h-32 object-cover rounded-lg shadow-md"
            />
            <button
              onClick={() => removeImage(image.id)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              X
            </button>
          </div>
        ))}

        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="mt-1 text-sm text-gray-600">Add image</span>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default MultiSelectImage;
