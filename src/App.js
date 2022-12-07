import "./App.css";
import React, { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useCryptoPrice } from "./hook";
import Card from "./Card";
import Button from "@mui/material/Button";
import {
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import "./App.css";
function App() {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
    width: "1200px",
    height: "700",
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
    <div ref={ref}>
      <Card />
      
    </div>
    <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItem: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={downloadScreenshot}
          sx={{ margin: "1rem" }}
        >
          Download screenshot
        </Button>
        <TwitterShareButton url={window.location.href} className="share-btn">
          <TwitterIcon />
        </TwitterShareButton>
        <WhatsappShareButton url={window.location.href} className="share-btn">
          <WhatsappIcon />{" "}
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default App;
