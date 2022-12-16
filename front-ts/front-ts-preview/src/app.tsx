import React, { useState } from "react";

const App = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = Array.from(e.target.files as FileList);
    setImages([...images, ...file]);
  };
  const handleOnRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <>
      <h1>画像をプレビュー</h1>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOnAddImage(e)
        }
      />

      {images.map((image, i) => {
        return (
          <div
            key={i}
            style={{
              position: "relative",
              width: "40%",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "#000",
                border: "none",
                background: "none",
              }}
              onClick={() => handleOnRemoveImage(i)}
            >
              X
            </button>
            <img src={URL.createObjectURL(image)} width={300} height={300} />
          </div>
        );
      })}
    </>
  );
};
export default App;
