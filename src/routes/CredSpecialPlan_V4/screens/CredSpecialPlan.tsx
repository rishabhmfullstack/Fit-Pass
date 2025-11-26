import { CheckIcon } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import success from "../../../assets/success.png"
import gymFacility1 from "../../../assets/Gym_images/Ellipse14957.png"
import gymFacility2 from "../../../assets/Gym_images/Ellipse14958(1).png"
import gymFacility3 from "../../../assets/Gym_images/Ellipse14959(1).png"
import gymFacility4 from "../../../assets/Gym_images/Ellipse14960.png"
import gymFacility5 from "../../../assets/Gym_images/Ellipse14961.png"
import gymFacility6 from "../../../assets/Gym_images/Ellipse14958.png"
import gymFacility7 from "../../../assets/Gym_images/Ellipse14960(1).png"
import gymFacility8 from "../../../assets/Gym_images/Ellipse14959.png"
import ratingBadge from "../../../assets/Gym_images/RatingBadge.png"
import ratingFrame from "../../../assets/Gym_images/Frame.png"
import star from "../../../assets/Gym_images/Star.png"

const gymImages = [
  {
    className:
      "absolute top-[75px] left-[calc(50.00%_-_55px)] w-[108px] h-[108px]",
    src: `${gymFacility1}`,
    alt: "Gym facility 1",
  },
  {
    className:
      "absolute top-[41px] left-[calc(50.00%_+_42px)] w-[53px] h-[53px]",
    src: `${gymFacility2}`,
    alt: "Gym facility 2",
  },
  {
    className:
      "absolute top-[99px] left-[calc(50.00%_+_69px)] w-[71px] h-[71px]",
    src: `${gymFacility3}`,
    alt: "Gym facility 3",
  },
  {
    className: "absolute top-1 left-[calc(50.00%_+_88px)] w-8 h-8",
    src: `${gymFacility4}`,
    alt: "Gym facility 4",
  },
  {
    className: "absolute top-[62px] left-[calc(50.00%_-_140px)] w-8 h-8",
    src: `${gymFacility5}`,
    alt: "Gym facility 5",
  },
];

const leftColumnImages = [
  {
    className: "ml-[-19.1px] h-[53.45px] w-[53.45px] self-center",
    src: `${gymFacility6}`,
    alt: "Gym facility 6",
  },
  {
    className: "ml-[58.5px] w-[31.82px] h-[31.82px]",
    src: `${gymFacility7}`,
    alt: "Gym facility 7",
  },
  {
    className: "ml-[-19.1px] h-[71.27px] w-[71.27px] self-center",
    src: `${gymFacility8}`,
    alt: "Gym facility 8",
  },
];


const useCompleteProfile = () => {
  return useMutation({
    mutationFn: async () => {
      const payload = {
        user_mobile: 9212613241,
        user_name: "vandit jain",
        user_email: "vandit.jain@fitpass.co.in",
        geo_code: "28.613895,77.209006",
        screen_source: "user_register",
        register_source: {},
        campaign_details: {
          campaign_name: "test-aman-1",
          referral_channel: "test-2",
          referral_source: "test-2",
        },
        is_email_verified: 2,
        is_mobile_verified: 2,
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

      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/cred/complete-profile`,
        payload,
        { headers }
      );

      return res.data;
    },
  });
};


export const CredSpecialPlan = (): JSX.Element => {
  const hasCalledRef = useRef(false);
  const { mutate } = useCompleteProfile();

  useEffect(() => {
    if (!hasCalledRef.current) {
      hasCalledRef.current = true;
      mutate();
    }
  }, []);

  
  return (
    <main className="bg-white overflow-hidden w-full min-w-[360px] min-h-[800px] relative">
      <div className="absolute top-[335px] left-0 w-[360px] h-[476px] bg-[#FF9B031A] rounded-[24px_24px_0px_0px]" />

      <div className="absolute top-0 left-0 w-[360px] h-[200px] bg-[linear-gradient(180deg,rgba(52,190,134,0.3)_0%,rgba(52,190,134,0)_100%)]" />

      <h1 className="absolute left-[35px] bottom-[566px] w-[294px] [font-family:'Figtree',Helvetica] font-bold text-primary-coloursc1 text-[28px] text-center tracking-[0] leading-[30px]">
        Your 1 month Free Trial has been activated
      </h1>

      <div className="absolute left-[calc(50.00%_-_28px)] bottom-[646px] w-14 h-14 bg-brand-coloursgreen rounded-full flex items-center justify-center">
        <img src={success} alt="" />
      </div>

      <p className="absolute top-[246px] left-[calc(50.00%_-_160px)] w-80 [font-family:'Figtree',Helvetica] font-normal text-c-2 text-sm text-center tracking-[0] leading-5">
        Access 8,100+ fitness centres, expert nutritionists, A.I. personal
        coaching, doctors, health checkups, and so much more – all with a single
        pass
      </p>

      <section className="absolute top-[434px] left-5 w-80 h-[270px]">
        <Card className="w-80 h-[270px] relative bg-white rounded-[10px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[10px] before:[background:linear-gradient(219deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.05)_20%,rgba(0,0,0,0.05)_31%,rgba(82,71,71,0.05)_52%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0.05)_81%,rgba(20,11,11,0.05)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="p-0">
            <div className="absolute top-[11px] left-5 w-[280px] h-[183px]">
              {gymImages.map((image, index) => (
                <img
                  key={`gym-${index}`}
                  className={`${image.className} object-cover`}
                  alt={image.alt}
                  src={image.src}
                />
              ))}

              <div className="absolute top-0 left-0 w-[90px] h-[174px] flex flex-col gap-[8.9px]">
                {leftColumnImages.map((image, index) => (
                  <img
                    key={`left-gym-${index}`}
                    className={`${image.className} object-cover border rounded-[2rem]`}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>

              <div className="absolute top-1 left-[calc(50.00%_-_42px)] w-[90px] h-[54px]">
                <img
                  className="absolute w-[93.33%] h-[82.35%] top-[5.88%] left-0"
                  alt="Rating badge background"
                  src={ratingBadge}
                />

                <div className="absolute top-0.5 left-[27px] w-8 h-[38px] flex items-end justify-center [font-family:'Anton',Helvetica] font-normal text-[#ef4c4f] text-[25.5px] text-center tracking-[0] leading-[normal]">
                  5.0
                </div>

                <div className="absolute top-px left-[29px] [font-family:'Figtree',Helvetica] font-bold text-[#ef4c4f] text-[7.6px] text-center tracking-[0.38px] leading-[normal] whitespace-nowrap">
                  RATED
                </div>

                <div className="absolute top-[34px] left-6 [font-family:'Figtree',Helvetica] font-bold text-[#0a1f34] text-[7.6px] text-center tracking-[0.38px] leading-[normal] whitespace-nowrap">
                  BY 100K+
                </div>

                <img
                  className="absolute top-[43px] left-[19px] w-[46px] h-[13px]"
                  alt="Rating stars"
                  src={ratingFrame}
                />
              </div>
            </div>

            <div className="absolute top-[210px] left-[calc(50.00%_-_107px)] w-[217px] h-[42px]">
              <div className="absolute top-0 left-[calc(50.00%_-_84px)] h-[22px] flex items-end justify-center [font-family:'Figtree',Helvetica] font-bold text-[#0a1f34] text-lg tracking-[0] leading-[normal]">
                Visit 35,000+ Gyms
              </div>

              <div className="absolute top-5 left-[calc(50.00%_-_108px)] w-[217px] h-[22px]">
                <div className="absolute top-0 left-0 h-[22px] flex items-end justify-center [font-family:'Figtree',Helvetica] font-bold text-[#0a1f34] text-lg tracking-[0] leading-[normal]">
                  with amazing
                </div>

                <div className="absolute top-0 left-[calc(50.00%_+_6px)] w-[103px] h-[22px] flex gap-0.5">
                  <div className="flex items-end justify-center w-[81px] h-[22px] bg-[linear-gradient(90deg,rgba(255,155,2,1)_0%,rgba(239,84,79,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Figtree',Helvetica] font-bold text-transparent text-lg tracking-[0] leading-[normal]">
                    ambience
                  </div>

                  <div
                    className="mt-px w-[18px] h-[18px]"
                    style={{
                      backgroundImage: `url(${star})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute h-[48.52%] top-[-14.07%] left-[calc(50.00%_-_81px)] w-[156px] bg-[#ebfbe6] rounded-[78px/65.5px] blur-[89.96px] opacity-[0.56]" />
          </CardContent>
        </Card>
      </section>

      <h2 className="absolute top-[361px] left-[calc(50.00%_-_150px)] [font-family:'Figtree',Helvetica] font-bold text-[#0a1f34] text-2xl text-center tracking-[0] leading-7">
        Download the our app
        <br />
        &amp; start your fitness journey
      </h2>

      <Button
        variant="default"
        className="absolute top-[724px] left-5 w-[155px] h-[50px] bg-black hover:bg-black/90 rounded-[7.23px] p-0"
      >
        <div className="w-[105.97px] h-[26.45px] ml-[19.2px] relative">
          <img
            className="absolute w-[23.18%] h-full top-0 left-0"
            alt="Google Play icon"
            src="https://c.animaapp.com/mi4ah0wlNG597a/img/vector-1.svg"
          />

          <div className="absolute top-px left-[34px] w-[76px] h-[25px] flex flex-col gap-[1.2px]">
            <div className="ml-0 w-[31px] h-[9px] mt-0 [font-family:'Inter',Helvetica] font-normal text-white text-[7.7px] tracking-[0] leading-[normal] whitespace-nowrap">
              Get it on
            </div>

            <div className="ml-0 w-[72px] h-[15px] [font-family:'Inter',Helvetica] font-normal text-white text-[12.8px] tracking-[0] leading-[normal] whitespace-nowrap">
              Google Play
            </div>
          </div>
        </div>
      </Button>

      <Button
        variant="default"
        className="absolute top-[724px] left-[185px] w-[155px] h-[50px] bg-black hover:bg-black/90 rounded-[7.23px] p-0"
      >
        <div className="w-[104.79px] h-[27.28px] ml-[20.5px] relative">
          <img
            className="absolute w-[21.79%] h-full top-0 left-0"
            alt="Apple Store icon"
            src="https://c.animaapp.com/mi4ah0wlNG597a/img/vector.svg"
          />

          <div className="absolute top-0.5 left-[34px] w-[75px] h-[25px] flex flex-col gap-[1.2px]">
            <div className="w-[62px] h-[9px] [font-family:'Inter',Helvetica] font-normal text-white text-[7.7px] tracking-[0] leading-[normal] whitespace-nowrap">
              Download on the
            </div>

            <div className="ml-0 w-[71px] h-[15px] [font-family:'Inter',Helvetica] font-normal text-white text-[12.8px] tracking-[0] leading-[normal] whitespace-nowrap">
              Apple Store
            </div>
          </div>
        </div>
      </Button>

      <div className="fixed w-full left-0 bottom-0 h-3.5 flex items-center justify-center">
        <div className="h-[3px] w-24 bg-[#0a1f34] rounded-sm" />
      </div>
    </main>
  );
};
