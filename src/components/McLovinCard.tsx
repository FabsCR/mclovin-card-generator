"use client";

import React, { useState, useRef } from "react";
import NextImage from "next/image";

const McLovinCard: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isCardReady, setIsCardReady] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setIsCardReady(false);

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateCard = () => {
    if (!selectedImage || !canvasRef.current) {
      alert("Please upload a photo first!");
      return;
    }

    setIsGenerating(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const canvasWidth = 1000;
    const canvasHeight = 600;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const templateImage = document.createElement("img");
    templateImage.src = "/mclovin_template1.png";
    templateImage.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

      const userImage = document.createElement("img");
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          userImage.src = e.target.result as string;

          userImage.onload = () => {
            const size = Math.min(userImage.width, userImage.height);
            const sx = (userImage.width - size) / 2;
            const sy = (userImage.height - size) / 2;

            const dx = canvasWidth * (5.5 / 500);
            const dy = canvasHeight * (4 / 300);
            const dWidth = canvasWidth * (170 / 500);
            const dHeight = canvasHeight * (200 / 300);

            ctx.drawImage(userImage, sx, sy, size, size, dx, dy, dWidth, dHeight);
            setIsGenerating(false);
            setIsCardReady(true);
          };
        }
      };

      reader.readAsDataURL(selectedImage);
    };
  };

  const downloadCard = () => {
    if (!isCardReady) {
      alert("Please generate the card before downloading!");
      return;
    }
    
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "mclovin_card.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-gray-800 dark:text-gray-100 rounded-lg shadow-2xl max-w-4xl mx-auto">
      <form className="mb-6 flex flex-col items-center space-y-4 w-full">
        <label className="block text-lg font-medium mb-2">Upload Your Photo:</label>
        <div className="relative w-3/4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex justify-center items-center p-3 bg-white text-gray-800 rounded-lg shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition cursor-pointer">
            Browse Image
          </div>
        </div>
        {preview && (
          <div className="mt-4">
            <NextImage
              src={preview}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white dark:border-gray-700"
              width={192}
              height={192}
            />
          </div>
        )}
        <button
          type="button"
          onClick={generateCard}
          className={`px-6 py-3 font-semibold rounded-lg shadow-md transition duration-200 ${
            isGenerating
              ? "bg-gray-400 text-gray-800 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Generate Card"}
        </button>
      </form>
      <div className="w-full max-w-3xl flex justify-center">
        <canvas
          ref={canvasRef}
          className="border-4 border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 w-full max-h-[400px]"
        ></canvas>
      </div>
      <button
        onClick={downloadCard}
        className="mt-6 px-6 py-3 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition duration-200"
      >
        Download Card
      </button>
    </div>
  );
};

export default McLovinCard;