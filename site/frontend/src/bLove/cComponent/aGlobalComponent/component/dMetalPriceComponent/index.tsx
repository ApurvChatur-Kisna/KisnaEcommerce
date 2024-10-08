import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/aConnection/aShadcnConnection/components/ui/card';
import formatNumberWithCommas from '@/bLove/dUtility/aFormatNumbersWithComma';

// Define the structure of the API response
interface MetalPriceComponentInterface {
  price: number;
  metal: string;
  currency: string;
  timestamp: string;
}

const MetalPriceComponent: React.FC = () => {
  const [goldPrice, setGoldPrice] = useState<MetalPriceComponentInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Function to format date as YYYYMMDD
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);  // Get month (0-indexed) and pad with zero
    const day = ('0' + date.getDate()).slice(-2);            // Get day and pad with zero
    return `${year}${month}${day}`;
  };

  useEffect(() => {
    const fetchGoldPrice = async () => {
      setLoading(true)

      // Get the current date and time
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      // Adjust date if current time is before 10 AM
      if (currentHour < 15) {
        currentDate.setDate(currentDate.getDate() - 1);
      }

      // Format the adjusted date
      const formattedDate = formatDate(currentDate);


      // Construct the dynamic API URL with the formatted date
      const apiUrl = `https://www.goldapi.io/api/XAU/INR/${formattedDate}`;

      const config = {
        headers: {
          'x-access-token': 'goldapi-s2ysm1uhfrzt-io',
          'Content-Type': 'application/json',
        },
      };

      try {
        const response: AxiosResponse<MetalPriceComponentInterface> = await axios.get(apiUrl, config);
        setGoldPrice(response.data); // Set the gold price from API response
      } catch (error: any) {
        setError(error?.response?.data?.error || error.message); // Handle error
      } finally {
        setLoading(false)
      }
    };

    fetchGoldPrice(); 
  }, []); 

  return (
    <React.Fragment>
      <div className="mb-4">
        {error && <div className="text-xs text-red-500 text-left md:text-center py-2">{error}</div>}
        {loading && <div className="text-xs text-muted text-left md:text-center py-2">Loading...</div>}

        {goldPrice !== null && (
          <div className="flex flex-1 gap-4 align-middle justify-center py-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Gold per ounce</CardDescription>
                <CardTitle className="text-3xl">₹ {formatNumberWithCommas(goldPrice.price.toFixed(2))}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  {<p>Time: {new Date(goldPrice.timestamp).toLocaleString()}</p>}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {<div className="text-xs text-yellow-300 text-left md:text-center">Note: Price updates at 11 AM everyday</div>}
      </div>
    </React.Fragment>
  );
};

export default MetalPriceComponent;
