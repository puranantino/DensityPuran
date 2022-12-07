import { useState,useEffect } from "react";

export const useCryptoPrice = () => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const currencyName  ="bitcoin"

  useEffect(()=>{
    
  })
  const socket = new WebSocket(
    `wss://ws.coincap.io/prices?assets=${currencyName}`
  );

  socket.addEventListener("message", function (event) {
    if (event) {
      const bitcoinPrice = JSON.parse(event.data)?.bitcoin;

      setCurrentPrice(bitcoinPrice);
    }

    // parse & show the data
  });

  return currentPrice;
};
