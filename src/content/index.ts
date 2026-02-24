import { en } from "./en";
import { fr } from "./fr";
import type { Dictionary, Lang, ServiceCategory, ServiceItem } from "./types";

export const SUPPORTED_LANGS: Lang[] = ["fr", "en"];

export const isSupportedLang = (value: string): value is Lang =>
  SUPPORTED_LANGS.includes(value as Lang);

export const getDictionary = (lang: Lang): Dictionary =>
  lang === "fr" ? fr : en;

export const getCategoryBySlug = (
  dictionary: Dictionary,
  slug: string,
): ServiceCategory | undefined =>
  dictionary.services.categories.find((category) => category.slug === slug);

export const getServiceBySlug = (
  category: ServiceCategory,
  slug: string,
): ServiceItem | undefined =>
  category.services.find((service) => service.slug === slug);
