"use client";

import { useTranslations } from "next-intl";
import React from "react";

// Logo image URLs
const logoPlaceholders = [
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmicrosoft.svg&w=128&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.svg&w=96&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.svg&w=128&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.svg&w=128&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fnvidia.svg&w=128&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcharacterai.svg&w=256&q=100",
];

const CustomerLogos = () => {
  const t = useTranslations('components.customer-logos');

  return (
    <div className="my-10 text-center text-muted-foreground">
      <div className="mb-5">
        {t('description')}
      </div>
      <div className="bg-transparent flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 py-4">
        {logoPlaceholders.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            // Tailwind CSS classes for responsive width
            className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] xl:w-[129px] h-auto" // Adjust the width classes as per your design requirement
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerLogos;
