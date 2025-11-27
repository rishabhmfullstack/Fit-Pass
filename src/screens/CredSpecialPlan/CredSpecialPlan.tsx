import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import axios from "axios";
import Group from "../../assets/Group1707481105.png";
import Shield from "../../assets/Shield2.png";
import Isolation_mode from "../../assets/Isolation_Mode.png"
import barbell from "../../assets/features/Barbell.png"
import carrot from "../../assets/features/Carrot.png"
import userRectangle from "../../assets/features/UserRectangle.png"
import monitorPlay from "../../assets/features/MonitorPlay.png"
import monitorPlay1 from "../../assets/features/MonitorPlay1.png"


const planFeatures = [
  {
    icon: `${barbell}`,
    text: "Access to 8,100+ premium gyms & fitness centres across 75+ cities",
    height: "h-7",
  },
  {
    icon: `${carrot}`,
    text: "Expert nutritionist consults, personalised diet plans & meal logs",
    height: "h-7",
  },
  {
    icon: `${userRectangle}`,
    text: "A.I. enabled personal fitness coaching",
    height: "h-4",
    topOffset: "top-0.5",
  },
  {
    icon: `${monitorPlay}`,
    text: "Access to unlimited virtual classes from 4,000+ global studios",
    height: "h-7",
  },
  {
    icon: `${monitorPlay1}`,
    text: "Free doctor consultations, health check-up, pharmacy voucher, discounts, savings & more",
    height: "h-7",
    iconTop: "top-px",
  },
];

export const CredSpecialPlan = (): JSX.Element => {
  const navigate = useNavigate();
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState<string | null>(null);
  // const merchant_transaction_number = "TXN-191919193174-1763126888";
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLat(pos.coords.latitude);
        setLng(pos.coords.longitude);
      },
      (err) => {
        console.error(err);
      }
    );
  };
  console.log("Latitude:", lat);
  console.log("Longitude:", lng);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const payload = {
        
  "latitude": lat,
  "longitude": lng,
  "merchant_transaction_number": "TXN-191919193174-1763126888"

      };

      const headers = {
        "Content-Type": "application/json",
        "X-FITPASS-PAYLOAD": JSON.stringify({
          user_id: 191919193174,
          fitpass_id: 98765789,
          app_version: "8.1.2",
          device_os: "15",
          device_id: "45231",
          device_type: "android",
          device_name: "android",
          access_source: "customer-android-app",
          customer_mobile: "9212613245",
          customer_name: "Testing",
        }),
        "X-FITPASS-APP-KEY": "fhskjdhfkjsdahgkjadsfmgbasdiughdiag",
        "X-AUTH-TOKEN": "l9xGmxeF6GU4djgsMDBWG9ui0xeDhvR7qxbWq1M9",
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/cred/order-confirmation`,
        payload,
        {
          headers,
        }
      );

      console.log("Response:", response.data);
      navigate("/cred-special-plan-v2");
    } catch (error: any) {
      console.error("Error:", error);
      if (error.response?.data?.meta?.description) {
        setError(error.response.data.meta.description);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


  return (
    <div
      className="bg-white overflow-hidden w-full max-w-[420px] min-w-[320px] min-h-[850px] relative mx-auto"
      data-model-id="1:16166"
    >
      
      <footer className="fixed left-1/2 bottom-[8px] w-full max-w-[420px] -translate-x-1/2 h-[110px] z-[6] bg-white rounded-[16px_16px_0px_0px] overflow-hidden shadow-[0px_0px_20px_#0000001a] flex flex-col items-center px-3">

        <Button
          onClick={handleSubmit}
          isLoading={isLoading}
          className="w-full max-w-[328px] h-12 mt-3 bg-brand-coloursdull-red hover:bg-brand-coloursdull-red rounded-[100px] font-bold text-primary-colourswhite text-sm text-center transition-transform hover:scale-[1.02]"
        >
          Get Started
        </Button>

        <p className="mt-2 w-[276px] text-center font-medium text-[#6C7985] text-xs leading-4">
          By clicking on "get started" you agree to the <a className="underline" href="#">Terms of service</a> and <a className="underline" href="#">Privacy policy</a>
        </p>


      </footer>


      <h1 className="absolute top-[355px] left-[5%] -translate-x-1/2 w-[min(90%,360px)] h-[60px] flex flex-col items-center justify-center [font-family:'Figtree',Helvetica] font-normal text-primary-coloursc1 text-[28px] text-center tracking-[0] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div>

        <span className="font-bold text-[#0a1f34] leading-[30px]">
          Your all-in-one <br />
        </span>
        </div>

        <div>


        <span className="font-bold text-[#dc4144] leading-[30px]">Fitness</span>

        <span className="font-bold text-[#0a1f34] leading-[30px]">&nbsp;</span>

        <span className="font-bold text-[#dc4144] leading-[0.1px]">
          Membership
        </span>
        </div>
      </h1>

      <p className="absolute top-[430px] left-[5%] -translate-x-1/2 w-[min(90%,360px)] h-4 flex items-center justify-center [font-family:'Figtree',Helvetica] font-medium text-c-2 text-base text-center tracking-[0] leading-[22px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        Unlock your 30-Day trial in just 3 Steps
      </p>

      <div className="flex justify-between rounded-md w-[min(90%,360px)] h-[32px] bg-[#F4F5F6] items-center gap-2 absolute top-[465px] left-[5%] -translate-x-1/2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
      

        <p className="relative w-fit left-[5%] [font-family:'Figtree',Helvetica] font-medium text-black text-xs tracking-[0] leading-4 whitespace-nowrap">
          Exclusively for Cred customers only
        </p>
       <img
          className="absolute left-[90%] w-[20px] h-[20px]"
          alt="Group"
          src={Shield}
        />
      </div>

        <div className="flex w-[min(90%,360px)] items-center gap-2 absolute top-[510px] left-[5%] -translate-x-1/2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="relative flex-1 grow h-px bg-primary-coloursc4" />

        <p className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Figtree',Helvetica] font-bold text-primary-coloursc1 text-[10px] tracking-[0.60px] leading-[normal] whitespace-nowrap">
          PLAN INCLUDES
        </p>

        <div className="relative flex-1 grow h-px bg-primary-coloursc4" />
      </div>

      <img
        className="absolute top-[27px] left-1/2 -translate-x-1/2 w-[min(100%,420px)] max-h-[408px] h-auto"
        alt="Group"
        src={Group}
      />

      <img
        className="absolute top-[44px] left-[27%] -translate-x-1/2 w-[min(90%,169px)] h-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms]"
        alt="Isolation mode"
        src={Isolation_mode}
      />

      <ul className="flex flex-col w-[min(90%,360px)] h-[174px] items-start gap-2.5 absolute top-[538px] left-1/2 -translate-x-1/2">
        {planFeatures.map((feature, index) => (
          <li
            key={index}
          className={`relative w-full ${feature.height} mr-[-2.00px] translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              {
                "--animation-delay": `${1000 + index * 100}ms`,
              } as React.CSSProperties
            }
          >
            <img
              className={`absolute ${feature.iconTop || "top-0"} left-0 w-4 h-4`}
              alt={`Feature icon ${index + 1}`}
              src={feature.icon}
            />

            <p
              className={`absolute ${feature.topOffset || "top-0"} left-10 right-0 [font-family:'Figtree',Helvetica] font-medium text-primary-coloursc1 text-xs tracking-[0] ${
                feature.height === "h-4" ? "leading-3" : "leading-[14px]"
              }`}
            >
              {feature.text}
            </p>
          </li>
        ))}
      </ul>


      <div className="fixed w-full left-0 bottom-0 h-3.5 flex items-center justify-center bg-white">
        <div className="h-[3px] w-24 bg-black rounded-sm" />
      </div>
    </div>
  );
};
