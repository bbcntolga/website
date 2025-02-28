"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pEX7EqxFIEF
 */
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { useTranslations } from "next-intl";

export function TeamComponent() {
  const t = useTranslations("components.team-component");

  const team = [
    {
      image: "/img/team/placeholder.png",
      name: "Steffen Röhrs",
      role: t("role.advisory ai engineer"),
      office: "Bielefeld",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Namik Kurt",
      role: t("role.senior data scientiest ai & analytics"),
      office: "Bielefeld",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Max Krämer",
      role: t("role.data & ai, hybrid cloud"),
      office: "Bielefeld",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Cengizhan Pinar",
      role: t("role.lead solution architect"),
      office: "Istanbul",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Beytullah Yildiz",
      role: t("role.lead developer"),
      office: "Istanbul",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Umut Yilmaz",
      role: t("role.senior full-stack developer"),
      office: "Istanbul",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Elif Sümer",
      role: t("role.full-stack developer"),
      office: "Istanbul",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Mehmet Ertemel",
      role: t("role.senior backend developer"),
      office: "Istanbul",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Yaman Yelken",
      role: t("role.senior backend developer"),
      office: "Istanbul",
    },
    {
      image: "/img/team/placeholder.png",
      name: "Zeynep Yalcinkaya",
      role: t("role.full-stack developer"),
      office: "Istanbul",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-6xl gap-4 px-4 md:px-6 items-center justify-center text-center">
        <div className="space-y-2 pb-12">
          <Badge
            variant="default"
            className="gradient-text text-lg md:text-xl lg:text-2xl px-4 py-2 font-semibold"
          >
            {t("title")}
          </Badge>
          <div className="mb-5 text-lg md:text-2xl lg:text-6xl px-4 py-2">
            {t("subtitle")}
          </div>
          <div className="mx-auto text-center max-w-[600px] text-md md:text-xl lg:text-2xl">
            {t("body")}
          </div>
        </div>
        <div className="grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((item, index) => (
            <Card key={index}>
              <div className="flex flex-col ">
                <CardHeader className="flex-1">
                  <img
                    alt="Picture of the author"
                    className="rounded-full border-2 border-gray-100 w-16 h-16 m-auto object-cover overflow-hidden"
                    height="64"
                    src={item.image}
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-center gap-1">
                  <h3 className="text-md font-semibold tracking-wide/none">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("office")}: {item.office}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
