"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations('components.footer-section');

  return (
    <footer className="w-full border-t z-50">
      <div className="container flex justify-center py-4">
        <nav className="flex text-sm justify-between w-full">
          <span>{t('copyright')}</span>
          <Link className="text-sm font-medium" href="/impressum">
            {t('impressum')}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
