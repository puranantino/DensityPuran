import "./App.css";
import React, { createRef } from "react";
import Image from "./assets/flower.jpg";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useCryptoPrice } from "./hook";
import Card from "./Card";
function App() {
  const bitCoinPrice = useCryptoPrice("bitcoin");
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
    width:"1200px",
    height: "700",
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  console.log(bitCoinPrice);

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  console.log(window.location)

  return (
    <div
    
    >
      <div
        ref={ref}
        
      >
<Card bitCoinPrice={bitCoinPrice} />      </div>
      <div>
      <button onClick={downloadScreenshot}>Download screenshot</button>
      <button >Share</button>
      </div>
   

    </div>
  );
}

export default App;
