import { Announcement } from "@/components/announcement";
import {
  BackgroundBeams,
  BackgroundBeamsDemo,
} from "@/components/background-beams";
import { Boxes } from "@/components/background-boxes";
import { BeamContent } from "@/components/beam-content";
import CustomerLogos from "@/components/customer-logos";
import { EvervaultCard, Icon } from "@/components/evervault-card";
import { GeminiEffect } from "@/components/gemini-effect";
import { MeteorCard } from "@/components/meteor-card";
import { Button, MovingBorder } from "@/components/moving-border";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { SparklesPreview } from "@/components/sparkles-preview";
import { Spotlight } from "@/components/spotlight";
import { TeamComponent } from "@/components/team-component";
import TextCycle from "@/components/text-cycle";
import { TracingBeam } from "@/components/tracing-beam";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useMotionValue } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useTranslations } from 'next-intl';
import { Link } from "@/navigation";

export default function Home() {
  const t = useTranslations('app.page');

  const onClickEvent = () => {
    window.open(
      "https://calendly.com/aifano/aifano",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>
          <div>Power</div>
          <div>
            <TextCycle />
          </div>
          <div>With Your Data</div>
        </PageHeaderHeading>
        <PageHeaderDescription className="my-6">
          {t('header.description')}
        </PageHeaderDescription>
        <PageActions>
          <Link href={"https://calendly.com/aifano/aifano"} target="_blank">
            <Button>{t('header.button')}</Button>
          </Link>
        </PageActions>
        <CustomerLogos />

        <section className="rounded-lg my-14">
          <div className="my-10 text-center max-w-full">
            <Badge
              variant="default"
              className="gradient-text text-lg md:text-xl lg:text-2xl px-4 py-2 font-semibold"
            >
              {t('ai-enterprise-section.header')}
            </Badge>
            <div className="mb-5 text-lg md:text-2xl lg:text-6xl px-4 py-2">
            {t('ai-enterprise-section.subheader')}
            </div>
            <div className="mx-auto text-center max-w-[600px] text-md md:text-xl lg:text-2xl">
            {t('ai-enterprise-section.body')}
            </div>
            <div className="mx-auto mt-8">
              <Link href={"https://calendly.com/aifano/aifano"} target="_blank">
                <button className="relative inline-flex h-12 overflow-hidden rounded-lg	 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg	 bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {t('ai-enterprise-section.link')}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 gap-2 w-full">
          {["fine-tuning-and-rlhf", "foundation-models", "enterprise-data"].map((meteorCardKey) => (
            <MeteorCard
              key={meteorCardKey}
              title={t(`meteor-card-section.${meteorCardKey}.title`)}
              description={t(`meteor-card-section.${meteorCardKey}.description`)}
            />
          ))}
        </section>

        <section className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 gap-2 w-full">
          <TeamComponent />
        </section>
      </PageHeader>
    </div>
  );
}
