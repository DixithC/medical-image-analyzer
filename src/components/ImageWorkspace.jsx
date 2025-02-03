import React, { useState, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import Konva from 'konva';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  ImagePlus,
  Contrast 
} from 'lucide-react';

const ImageWorkspace = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [brightness, setBrightness] = useState(0);
  const stageRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new window.Image();
        img.src = e.target.result;
        img.onload = () => setImage(img);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleZoom = (direction) => {
    const newScale = direction === 'in' ? scale * 1.2 : scale / 1.2;
    setScale(Math.max(0.1, Math.min(10, newScale)));
  };

  const handleBrightnessChange = (e) => {
    setBrightness(parseFloat(e.target.value));
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex space-x-4">
        <input
          type="file"
          accept="image/*,.dcm"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <ImagePlus size={20} />
          Upload Image
        </label>
        <button
          onClick={() => handleZoom('in')}
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <ZoomIn size={20} className="dark:text-white" />
        </button>
        <button
          onClick={() => handleZoom('out')}
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <ZoomOut size={20} className="dark:text-white" />
        </button>
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <Maximize2 size={20} className="dark:text-white" />
        </button>
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <Contrast size={20} className="dark:text-white" />
        </button>
        <div className="flex items-center gap-2">
          <span className="dark:text-white">Brightness</span>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.1"
            value={brightness}
            onChange={handleBrightnessChange}
            className="w-32"
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800">
        <Stage
          ref={stageRef}
          width={800}
          height={600}
          scale={{ x: scale, y: scale }}
        >
          <Layer>
            {image && (
              <KonvaImage
                image={image}
                filters={[Konva.Filters.Brightness]}
                brightness={brightness}
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default ImageWorkspace;