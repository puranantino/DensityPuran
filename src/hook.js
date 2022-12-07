import { useState, useEffect } from "react";

export const useCryptoPrice = (currencyName) => {
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    const socket = new WebSocket(
      `wss://ws.coincap.io/prices?assets=${currencyName}`
    );

    socket.addEventListener("message", function (event) {
      if (event) {
        const bitcoinPrice = JSON.parse(event.data)[currencyName];

        setCurrentPrice(bitcoinPrice);
      }

      // parse & show the data
    });
  }, []);

  return currentPrice;
};
