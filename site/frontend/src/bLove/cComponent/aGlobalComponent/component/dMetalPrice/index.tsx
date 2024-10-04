import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/aConnection/aShadcnConnection/components/ui/card";
import formatNumberWithCommas from "@/bLove/dUtility/aFormatNumbersWithComma";


interface MetalPriceResponse {
  rates: {
    INRXAG: number; // Silver price in INR
    INRXAU: number; // Gold price in INR
  };
  timestamp: number; // API response timestamp
}

const MetalPrice: React.FC = () => {
  const [silverPrice, setSilverPrice] = useState<number | null>(null);
  const [goldPrice, setGoldPrice] = useState<number | null>(null);
  const [apiHitTime, setApiHitTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchMetalPrices = async () => {
      const apiKey = "b47e32de72d9b20ae001bbe995e95f8a";
      const url = `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=INR&currencies=XAG,XAU`;

      try {
        const response = await axios.get<MetalPriceResponse>(url);
        console.log(response);

        // Set silver and gold prices from response
        setSilverPrice(response.data.rates.INRXAG);
        setGoldPrice(response.data.rates.INRXAU);

        // Capture the time of the API hit and format it
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setApiHitTime(formattedTime);
      } catch (err) {
        setError("Error fetching metal prices. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchMetalPrices();
  }, []);

  return (
    <div className="mb-4">
      {<div className="text-xs text-yellow-300 text-center">Warning: 100 API hits per day.</div>}
      {error && <div className="text-xs text-red-500 text-center">{error}</div>}
      {loading && <div className="text-xs text-muted text-center">Loading...</div>}
      {silverPrice !== null && goldPrice !== null && (
        <div className="flex flex-1 gap-4 align-middle justify-center py-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Gold per ounce</CardDescription>
              <CardTitle className="text-3xl">₹ {formatNumberWithCommas(goldPrice.toFixed(2))}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                {apiHitTime && <p>Time: {apiHitTime}</p>}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Silver per ounce</CardDescription>
              <CardTitle className="text-3xl">₹ {formatNumberWithCommas(silverPrice.toFixed(2))}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                {apiHitTime && <p>Time: {apiHitTime}</p>}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MetalPrice;
