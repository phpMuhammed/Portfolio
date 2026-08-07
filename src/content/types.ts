export type Locale = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface MetaContent {
  title: string;
  description: string;
}

export interface NavContent {
  work: string;
  skills: string;
  about: string;
  contact: string;
  languageToggleLabel: string;
  themeToggleLightLabel: string;
  themeToggleDarkLabel: string;
  skipToContent: string;
  menuLabel: string;
}

export interface IdentityContent {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  availability: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
}

export interface HeroContent {
  positioning: string;
  downloadCvLabel: string;
  getInTouchLabel: string;
  githubLabel: string;
  emailLabel: string;
  phoneLabel: string;
}

export interface WorkEntry {
  slug: 'istoria' | 'onestudio' | 'darent' | 'captab';
  flagship?: boolean;
  name: string;
  role: string;
  subLabel?: string;
  dates: string;
  metricBadge?: string;
  website?: string;
  linkedin?: string;
  description: string;
  highlights: string[];
  techTags: string[];
  accentColor: string;
  websiteLinkLabel?: string;
  linkedinLinkLabel?: string;
}

export interface WorkSectionContent {
  heading: string;
  websiteLabel: string;
  linkedinLabel: string;
  entries: WorkEntry[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SkillsSectionContent {
  heading: string;
  groups: SkillGroup[];
}

export interface AboutSectionContent {
  heading: string;
  summary: string;
  educationHeading: string;
  education: string;
  languagesHeading: string;
  languages: string;
}

export interface ContactSectionContent {
  heading: string;
  cvNote?: string;
  downloadCvLabel: string;
  emailLabel: string;
  phoneLabel: string;
  githubLabel: string;
  locationLabel: string;
}

export interface FooterContent {
  builtWith: string;
}

export interface SiteContent {
  locale: Locale;
  dir: Direction;
  path: string;
  htmlLangAlt: string;
  altPath: string;
  meta: MetaContent;
  identity: IdentityContent;
  contact: ContactInfo;
  nav: NavContent;
  hero: HeroContent;
  work: WorkSectionContent;
  skills: SkillsSectionContent;
  about: AboutSectionContent;
  contactSection: ContactSectionContent;
  footer: FooterContent;
}
