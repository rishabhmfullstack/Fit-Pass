import { ChevronLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
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
      "Start your fitness journey with your 30-day free trial on FITPASS",
  },
  {
    day: "Day 29",
    description: "We will remind you that your free trial is ending",
  },
  {
    day: "Day 30",
    description:
      "You will be charged ₹3,999 for 3 months. Cancel at least one day before.",
  },
];

export const CredSpecialPlan = (): JSX.Element => {
  const navigate = useNavigate();
  const [lat, setLat] = useState<Number | null>(null);
  const [lng, setLng] = useState<Number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
      const description = error.response?.data?.meta?.description;
      setToastMessage(
        description?.trim()
          ? description
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 5200);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);
  
  return (
    <div
      className="bg-white overflow-hidden w-full max-w-[420px] min-w-[320px] min-h-[800px] flex flex-col relative mx-auto"
      data-model-id="1:15616"
    >
      {toastMessage && (
        <div className="pointer-events-none fixed top-4 left-1/2 z-[50] w-[min(90%,360px)] -translate-x-1/2 px-4">
          <div className="rounded-[12px] bg-[#fef3c7]/90 border border-[#facc15] px-4 py-3 shadow-lg shadow-[#facc1590] text-[13px] font-semibold text-[#78350f]">
            {toastMessage}
          </div>
        </div>
      )}
      
      <header className="z-[1] w-[min(90%,360px)] h-14 relative mt-6 bg-white opacity-0 animate-fade-in [--animation-delay:0ms] mx-auto">
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

      <div className="flex z-[2] ml-px h-3 w-[min(90%,321px)] self-center absolute top-[325px] left-[5%] -translate-x-1/2 items-center gap-2 opacity-0 animate-fade-in [--animation-delay:400ms]">
        <Separator className="flex-1 bg-primary-coloursc4" />

        <div className="relative opacity-60 [font-family:'Figtree',Helvetica] font-bold text-primary-coloursc1 text-[10px] tracking-[0.60px] leading-[normal] whitespace-nowrap">
          WHEN WILL YOU BE CHARGED
        </div>

        <Separator className="flex-1 bg-primary-coloursc4" />
      </div>

      <section className="absolute top-[354px] left-[5%] -translate-x-1/2 w-[min(90%,311px)] min-h-[260px] z-[3] opacity-0 animate-fade-in [--animation-delay:600ms]">
        <img
          className="absolute top-0 left-0 h-full w-6"
          alt="Timeline"
          src={TimeLine}
        />
        <div className="relative ml-9 flex flex-col gap-5 pr-3 pt-4 pb-4">
          {timelineData.map((item, index) => (
            <article key={index} className="flex flex-col gap-1">
              <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-primary-coloursc1 text-base tracking-[0] leading-[normal]">
                {item.day}
              </h3>

              {index === 0 ? (
                <p className="self-start opacity-[0.64] [font-family:'Figtree',Helvetica] font-normal text-[#0a1f34] text-sm tracking-[0] leading-5">
                  <span>
                    Start your fitness journey with your 30-day free trial on{" "}
                  </span>
                  <span>FITPASS</span>
                </p>
              ) : index === 2 ? (
                <p className="self-start opacity-[0.64] [font-family:'Figtree',Helvetica] font-normal text-primary-coloursc1 text-sm tracking-[0] leading-[16px]">
                  <span className="leading-[0.1px]">You will be charged </span>
                  <span className="[font-family:'Figtree',Helvetica] font-semibold text-[#0a1f34] text-sm tracking-[0] leading-5">
                    ₹3,999
                  </span>
                  <span className="leading-[0.1px]"> on </span>
                  <span className="[font-family:'Figtree',Helvetica] font-semibold text-[#0a1f34] text-sm tracking-[0] leading-5">
                    {getDateAfter30Days()}
                  </span>
                  <span className="leading-[0.1px]">
                    {" "}
                    for 3 months. Cancel at least one day before.
                  </span>
                </p>
              ) : (
                <p className="self-start opacity-[0.64] [font-family:'Figtree',Helvetica] font-normal text-primary-coloursc1 text-sm tracking-[0] leading-5">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="absolute top-[266px] left-1/2 z-[7] w-[min(90%,260px)] -translate-x-1/2 [font-family:'Figtree',Helvetica] font-normal text-primary-coloursc2 text-[12px] text-center tracking-[0] leading-[14px]">
        <span className="font-medium text-[#6c7985] leading-5">
          Renews at {""}
          
        </span>

        <span className="font-bold text-[#0a1f34] leading-5">
          ₹1,999 every month {""}
        </span>
        after 30 days.
      </div>

      <footer className="fixed w-full left-1/2 bottom-0 w-[min(90%,360px)] max-w-[420px] h-[110px] z-[6] bg-white rounded-[16px_16px_0px_0px] overflow-hidden shadow-[0px_0px_20px_#0000001a] -translate-x-1/2">
        <Button onClick={handleSubmit} isLoading={isLoading} className="absolute top-[calc(50.00%_-_20px)] left-1/2 -translate-x-1/2 w-[min(90%,328px)] h-12 bg-brand-coloursdull-red hover:bg-brand-coloursdull-red rounded-[100px] [font-family:'Figtree',Helvetica] font-bold text-primary-colourswhite text-sm text-center tracking-[0] leading-[16.8px] transition-transform hover:scale-[1.02]">
          Activate now
        </Button>

        <div className="absolute w-full left-0 bottom-0 h-3.5 flex items-center justify-center bg-primary-colourswhite">
          <div className="h-[3px] w-24 bg-[#0a1f34] rounded-sm" />
        </div>

        <p className="absolute left-1/2 -translate-x-1/2 bottom-[79px] w-[min(90%,320px)] [font-family:'Figtree',Helvetica] font-medium text-[#6c7985] text-xs text-center tracking-[0] leading-4">
          ₹2 will be charged to validate payment method.
        </p>
        
      </footer>
    </div>
  );
};
