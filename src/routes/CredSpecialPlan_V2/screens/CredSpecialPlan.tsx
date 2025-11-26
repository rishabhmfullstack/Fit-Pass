import { ChevronLeftIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GroupImage from "../../../assets/Group1437256156.png";
import TimeLine from "../../../assets/Group1707481117.png";

const timelineData = [
  {
    day: "Today",
    description:
      "Start your fitness journey with your 7-day free trial on FITPASS",
  },
  {
    day: "Day 29",
    description: "We will remind you that your free trial is ending",
  },
  {
    day: "Day 30",
    description:
      "You will be charged ₹3,999 on 17 Nov, 2025 for 3 months. Cancel atleast one day before.",
  },
];

export const CredSpecialPlan = (): JSX.Element => {
  const navigate = useNavigate();
  const [lat, setLat] = useState<Number | null>(null);
  const [lng, setLng] = useState<Number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const merchant_transaction_number = "TXN-191919193174-1763126888";
  
  // Function to calculate date 30 days from today
  const getDateAfter30Days = (): string => {
    const today = new Date();
    const futureDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    
    const day = String(futureDate.getDate()).padStart(2, '0');
    const month = futureDate.toLocaleString('en-GB', { month: 'short' });
    const year = futureDate.getFullYear();
    
    return `${day} ${month}, ${year}`;
  };
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
        product_type: 22,
        after_discount_price: 2199,
        total_order_price: 5330,
        membership_plan_ids: [5305],
        geo_location: {
          lat: lat || 28.682875,
          long: lng || 77.200337,
        },
        sale_discount: 3131,
        coupon_discount_details: {
          coupon_code: "",
        },
        redeemable_amount: {
          fitcash: 0,
          "e-voucher": 0,
        },
        fitshop_product_details: null,
        corporate_id: 0,
        user_type: 1,
        user_source: [
          {
            key: "campaign_name",
            value: "cred-subscription-offer",
          },
          {
            key: "referral_source",
            value: "",
          },
          {
            key: "referral_channel",
            value: "",
          },
        ],
        device_details: {
          ip: "192.168.128.130",
          app_version: "5.3.4",
          init_channel: "App",
          device_id: "491DF849-E365-42A0-AC9C-43969FDB1DA3",
          device_name: "iPhone10,3",
          device_type: "iOS",
          device_os: "15.5",
          user_agent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        },
        redirect_url: "/cred-special-plan-payment",
        screen_source: "",
        theme: "",
        merchant_transaction_number: "",
        merchant_order_number: "",
      };

      const headers = {
        "Content-Type": "application/json",
        "X-FITPASS-PAYLOAD": JSON.stringify({
          user_id: 191919193173,
          fitpass_id: 98765783,
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
        `${import.meta.env.VITE_API_BASE_URL}/cred/pending-order`,
        payload,
        {
          headers,
        }
      );

      console.log("Response:", response.data);
      
      if (response.data?.result?.web_link) {
        navigate("/payment-gateway", { 
          state: { webLink: response.data.result.web_link } 
        });
      }
      
      // navigate("/cred-special-plan-v3");
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
      className="bg-white w-full min-w-[360px] min-h-[800px] flex flex-col relative"
      data-model-id="1:15616"
    >
      
      <header className="z-[1] w-[360px] h-14 relative mt-6 bg-white opacity-0 animate-fade-in [--animation-delay:0ms]">
        <h1 className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_118px)] w-[237px] [font-family:'Figtree',Helvetica] font-semibold text-[#0a1f34] text-base text-center tracking-[0.20px] leading-5">
          Your plan
        </h1>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[calc(50.00%_-_16px)] left-3 w-8 h-8 p-0"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#0a1f34]" />
        </Button>
      </header>

      <div className="flex justify-center pt-6 pb-4">
          <img
            className="w-[87px] h-20"
            alt="Group"
            src={GroupImage}
          />
        </div>
        <div className="relative text-center opacity-60 [font-family:'Figtree',Helvetica] font-bold text-primary-coloursc1 text-[10px] tracking-[0.60px] leading-[normal] whitespace-nowrap">
          UNLOCK YOUR
        </div>
        <div className="w-full px-4 [font-family:'Figtree',Helvetica] font-normal text-[32px] leading-8">
      <h1 className="font-semibold text-center relative mt-2 opacity-0 animate-fade-in [--animation-delay:200ms]">
        <span className="text-[#0a1f34] tracking-[-0.32px] leading-9">
          1 month Free Trial
        </span>
       
      </h1>
    </div>

      <div className="flex z-[2] ml-px h-3 w-[321px] self-center absolute mt-0 top-[325px] items-center gap-2 opacity-0 animate-fade-in [--animation-delay:400ms]">
        <Separator className="flex-1 bg-primary-coloursc4" />

        <div className="relative opacity-60 [font-family:'Figtree',Helvetica] font-bold text-primary-coloursc1 text-[10px] tracking-[0.60px] leading-[normal] whitespace-nowrap">
          WHEN WILL YOU BE CHARGED
        </div>

        <Separator className="flex-1 bg-primary-coloursc4" />
      </div>

      <section className="absolute top-[354px] left-5 w-[311px] h-[244px] z-[3] opacity-0 animate-fade-in [--animation-delay:600ms]">
        <img
          className="absolute top-0 left-0 w-6 h-[244px]"
          alt="Timeline"
          src={TimeLine}
        />

        {timelineData.map((item, index) => (
          <article
            key={index}
            className={`absolute ${
              index === 0 ? "top-1" : index === 1 ? "top-[84px]" : "top-[164px]"
            } left-[47px] w-[268px] ${
              index === 2 ? "h-20" : "h-[60px]"
            } flex flex-col gap-px`}
          >
            <h3
              className={`${
                index === 0
                  ? "-ml-56 w-11"
                  : index === 1
                    ? "ml-[-226px] w-[42px]"
                    : "ml-[-227px] w-[41px]"
              } h-[19px] self-center [font-family:'Figtree',Helvetica] font-semibold text-primary-coloursc1 text-base tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {item.day}
            </h3>

            <p
              className={`self-end mr-1 w-[264px] ${
                index === 2 ? "h-[60px]" : "h-10"
              } opacity-[0.64] [font-family:'Figtree',Helvetica] font-normal text-primary-coloursc1 text-sm tracking-[0] ${
                index === 2 ? "leading-[14px]" : "leading-5"
              }`}
            >
              {index === 0 ? (
                <>
                  <span className="[font-family:'Figtree',Helvetica] font-normal text-[#0a1f34] text-sm tracking-[0] leading-5">
                    Start your fitness journey with your 30-day free trial on{" "}
                  </span>
                  <span className="[font-family:'Figtree',Helvetica] font-normal text-[#0a1f34] text-sm tracking-[0] leading-5">
                    FITPASS
                  </span>
                </>
              ) : index === 2 ? (
                <>
                  <span className="leading-[0.1px]">You will be charged </span>
                  <span className="leading-5">₹3,999</span>
                  <span className="leading-[0.1px]"> on </span>
                  <span className="leading-5">{getDateAfter30Days()}</span>
                  <span className="leading-[0.1px]">
                    {" "}
                    for 3 months. Cancel atleast one day before.
                  </span>
                </>
              ) : (
                item.description
              )}
            </p>
          </article>
        ))}
      </section>

      <div className="absolute top-[266px] left-[92px] w-[180px] z-[7] [font-family:'Figtree',Helvetica] font-normal text-primary-coloursc2 text-[12px] text-center tracking-[0] leading-[14px]">
        <span className="font-medium text-[#6c7985] leading-5">
          Renews at {""}
          
        </span>

        <span className="font-bold text-[#0a1f34] leading-5">
          ₹1,999 every month {""}
        </span>
        after 30 days.
      </div>

      <footer className="fixed left-0 bottom-0 w-[360px] h-[110px] z-[6] bg-white rounded-[16px_16px_0px_0px] overflow-hidden shadow-[0px_0px_20px_#0000001a]">
        <Button onClick={handleSubmit} isLoading={isLoading} className="w-[328px] h-12 absolute top-[calc(50.00%_-_20px)] left-[calc(50.00%_-_164px)] bg-brand-coloursdull-red hover:bg-brand-coloursdull-red rounded-[100px] [font-family:'Figtree',Helvetica] font-bold text-primary-colourswhite text-sm text-center tracking-[0] leading-[16.8px] transition-transform hover:scale-[1.02]">
          Activate now
        </Button>

        <div className="absolute w-full left-0 bottom-0 h-3.5 flex items-center justify-center bg-primary-colourswhite">
          <div className="h-[3px] w-24 bg-[#0a1f34] rounded-sm" />
        </div>

        <p className="absolute left-[calc(50.00%_-_160px)] bottom-[79px] w-80 [font-family:'Figtree',Helvetica] font-medium text-[#6c7985] text-xs text-center tracking-[0] leading-4">
          ₹2 will be charged to validate payment method.
        </p>
        
      </footer>
    </div>
  );
};
