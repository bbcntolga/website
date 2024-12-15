"use client";

import { BackgroundBeams } from "@/components/background-beams";
import { BackgroundGradient } from "@/components/background-gradient";
import { Button } from "@/components/moving-border";
import {
  PageActions,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Spotlight } from "@/components/spotlight";
import TextCycle from "@/components/text-cycle";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/navigation";
import {
  BarChartIcon,
  CheckIcon,
  ChevronRightIcon,
  CogIcon,
  PenIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Carax() {
  const t = useTranslations('app.carax');

  return (
    <div className="sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <Spotlight
          className="-top-0 left-0 sm:-top-[90px] md:left-60 md:-top-[850px] lg:-top-[500px]"
          fill="white"
        />
        <div className="lg:w-1/2">
          <div className="flex">
            <Image
              alt="Logo"
              className="mb-6 animate-slow-spin"
              height={80}
              src="/img/logo.png"
              width={80}
              objectFit="cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-6">CarAX Platform</h1>
          <p className="mb-8 max-w-md">
            {t('header.description')}
          </p>
          <Link href={"https://calendly.com/aifano/aifano"} target="_blank">
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg	 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg	 bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {t('header.button')}
              </span>
            </button>
          </Link>
        </div>
        <div className="lg:w-2/3 mt-10 lg:mt-0 rounded-lg border-[#FFFFFF1A] border-[1px] bg-[#050507] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <div className="pl-2 pt-2 pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 10"
              height=".6em"
              role="img"
            >
              <circle
                cx="5"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="20"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="35"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
            </svg>
          </div>
          <video
            autoPlay
            muted
            loop
            style={{ width: "800px" }}
            className="rounded-lg"
          >
            <source src="/carax.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center mb-6 text-muted-foreground">
          {t('brand-section.description')}
        </p>
        <div className="flex flex-wrap justify-between mt-8">
          <img alt="Volkswagen" src="/img/volkswagen.svg" width="60" />
          <img alt="Seat" src="/img/seat.svg" width="60" />
          <img alt="Porsche" src="/img/porsche.svg" width="60" />
          <img alt="Audi" src="/img/audi.svg" width="60" />
          <img alt="Cupra" src="/img/brand-cupra.svg" width="60" />
        </div>
      </div>

      <section className="rounded-lg my-14">
        <div className="my-10 text-center max-w-full ">
          <Badge
            variant="default"
            className="gradient-text text-lg md:text-xl lg:text-2xl px-4 py-2 font-semibold"
          >
            {t('product-overview-section.title')}
          </Badge>
          <div className="mb-5 text-lg md:text-2xl lg:text-6xl px-4 py-2">
            Aifano CarAX Platform
          </div>
          <div className="mx-auto text-center max-w-4xl text-md md:text-xl lg:text-2xl px-8 text-muted-foreground">
            {t('product-overview-section.description')}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h3 className="text-2xl font-semibold mb-4">
            {t('empowerYour-section.title')}
          </h3>
          <ul className="space-y-4">
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('empowerYour-section.description')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('empowerYour-section.accessForecasts')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('empowerYour-section.stayInformed')}
              </span>
            </li>
          </ul>
        </div>
        <div className="max-w-[640px] lg:w-2/3 mt-10 lg:mt-0 rounded-lg border-[#FFFFFF1A] border-[1px] bg-[#050507] ml-4">
          <div className="pl-2 pt-2 pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 10"
              height=".6em"
              role="img"
            >
              <circle
                cx="5"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="20"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="35"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
            </svg>
          </div>
          <Image
            src="/img/example-1.png"
            width={640} // Set your desired width.
            height={400} // Set your desired height.
            layout="responsive"
            alt={""}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h3 className="text-2xl font-semibold mb-4">{t('fleet-management-section.title')}</h3>
          <ul className="space-y-4">
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('fleet-management-section.navigateLeasingPortfolio')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('fleet-management-section.alertsForKeyDates')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('fleet-management-section.adjustReturnDates')}
              </span>
            </li>
          </ul>
        </div>
        <div className="max-w-[640px] lg:w-2/3 mt-10 lg:mt-0 rounded-lg border-[#FFFFFF1A] border-[1px] bg-[#050507] ml-4">
          <div className="pl-2 pt-2 pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 10"
              height=".6em"
              role="img"
            >
              <circle
                cx="5"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="20"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="35"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
            </svg>
          </div>
          <Image
            src="/img/example-2.png"
            width={640} // Set your desired width.
            height={400} // Set your desired height.
            layout="responsive"
            alt={""}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h3 className="text-2xl font-semibold mb-4">
          {t('return-process-section.title')}
          </h3>
          <ul className="space-y-4">
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('return-process-section.fullVisibility')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('return-process-section.streamlineOperations')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('return-process-section.detailedViewsAndWarnings')}
              </span>
            </li>
          </ul>
        </div>
        <div className="max-w-[640px] lg:w-2/3 mt-10 lg:mt-0 rounded-lg border-[#FFFFFF1A] border-[1px] bg-[#050507] ml-4">
          <div className="pl-2 pt-2 pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 10"
              height=".6em"
              role="img"
            >
              <circle
                cx="5"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="20"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="35"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
            </svg>
          </div>
          <Image
            src="/img/example-3.png"
            width={640} // Set your desired width.
            height={400} // Set your desired height.
            layout="responsive"
            alt={""}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h3 className="text-2xl font-semibold mb-4">
            {t('resale-features-section.title')}
          </h3>
          <ul className="space-y-4">
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('resale-features-section.timelyAdvisories')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('resale-features-section.powerfulFiltering')}
              </span>
            </li>
            <li className="relative text-muted-foreground ">
              <CheckIcon className="text-muted-foreground absolute -left-7 top-0" />
              <span>
                {t('resale-features-section.predictiveInsights')}
              </span>
            </li>
          </ul>
        </div>
        <div className="max-w-[640px] lg:w-2/3 mt-10 lg:mt-0 rounded-lg border-[#FFFFFF1A] border-[1px] bg-[#050507] ml-4">
          <div className="pl-2 pt-2 pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 10"
              height=".6em"
              role="img"
            >
              <circle
                cx="5"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="20"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
              <circle
                cx="35"
                cy="5"
                r="5"
                fill="currentColor"
                fillOpacity=".2"
              ></circle>
            </svg>
          </div>
          <Image
            src="/img/example-4.png"
            width={640} // Set your desired width.
            height={400} // Set your desired height.
            layout="responsive"
            alt={""}
          />
        </div>
      </div>

      <hr className="border-0 bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.00)_0%,_#FFF_52.07%,_rgba(255,_255,_255,_0.00)_100%)] z-[1] opacity-[0.15] relative h-[1px] w-full max-w-[1006px] mx-auto"></hr>

      <section className="rounded-lg my-14">
        <div className="my-10 text-center max-w-full">
          <div className="mb-5 text-lg md:text-2xl lg:text-6xl px-4 py-2">
            {t('chooseCarAX.title')}
          </div>
          <div className="mx-auto text-center max-w-[800px] text-md md:text-xl lg:text-2xl text-muted-foreground px-8">
            {t('chooseCarAX.description')}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32 px-8">
        <div className="max-w-md">
          <h3 className="sm:text-lg lg:text-2xl font-semibold mb-4">
            {t('chooseCarAX.tailoredSolutions.title')}
          </h3>
          <p className="mb-4 text-muted-foreground">
            <CheckIcon className="text-muted-foreground mr-2 inline-block" />
            {t('chooseCarAX.tailoredSolutions.seamlessAdaptation')}
          </p>
          <p className="text-muted-foreground">
            <CheckIcon className="text-muted-foreground mr-2 inline-block" />
            {t('chooseCarAX.tailoredSolutions.aiEfficiency')}
          </p>
        </div>
        <div className="max-w-md">
          <h3 className="sm:text-lg lg:text-2xl font-semibold mb-4">
            {t('chooseCarAX.comprehensiveTools.title')}
          </h3>
          <p className="mb-4 text-muted-foreground">
            <CheckIcon className="text-muted-foreground mr-2 inline-block" />
            {t('chooseCarAX.comprehensiveTools.totalTransparency')}
          </p>
          <p className="text-muted-foreground">
            <CheckIcon className="text-muted-foreground mr-2 inline-block" />
            {t('chooseCarAX.comprehensiveTools.expectMore')}
          </p>
        </div>
        <div className="max-w-md">
          <h3 className="sm:text-lg lg:text-2xl font-semibold mb-4">
          {t('chooseCarAX.futureReady.title')}
          </h3>
          <p className="mb-4 text-muted-foreground">
            <CheckIcon className="text-muted-foreground mr-2 inline-block" />
            {t('chooseCarAX.futureReady.evolvesWithIndustry')}
          </p>
          <p className="text-muted-foreground">
            <CheckIcon className="text-muted-foreground mr-2 inline-block" />
            {t('chooseCarAX.futureReady.dedicatedPartner')}
          </p>
        </div>
      </div>

      <hr className="border-0 bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.00)_0%,_#FFF_52.07%,_rgba(255,_255,_255,_0.00)_100%)] z-[1] opacity-[0.15] relative h-[1px] w-full max-w-[1006px] mx-auto"></hr>

      <PageHeaderHeading className="mt-16">
        <div>Optimizing</div>
        <div className="gradient-text text-transparent bg-clip-text text-center text-4xl font-bold leading-tight tracking-tighter md:text-8xl lg:leading-[1.1]">
          Your Processes
        </div>
        <div>With CarAX</div>
      </PageHeaderHeading>
      <PageActions className="mb-24">
        <Link href={"https://calendly.com/aifano/aifano"} target="_blank">
          <button className="relative inline-flex h-12 overflow-hidden rounded-lg	 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg	 bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {t('footer.button')}
            </span>
          </button>
        </Link>
      </PageActions>
    </div>
  );
}
