import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";

export const PaymentGateway = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [webLink, setWebLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the web_link from the location state
    const state = location.state as { webLink?: string } | null;
    if (state?.webLink) {
      setWebLink(state.webLink);
      setIsLoading(false);
    } else {
      // If no web_link provided, redirect back
      navigate(-1);
    }
  }, [location, navigate]);

  if (isLoading || !webLink) {
    return (
      <div className="flex justify-center items-center w-full min-w-[360px] h-[100vh] bg-white">
        <p className="text-center text-gray-600">Loading payment...</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full min-w-[360px] h-[100vh] flex flex-col relative overflow-hidden">

      <div className="flex-1 overflow-auto">
        <iframe
          src={webLink}
          title="Payment Gateway"
          className="w-full h-full border-0"
          allow="payment"
        />
      </div>
    </div>
  );
};
