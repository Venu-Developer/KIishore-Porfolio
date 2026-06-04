export interface ButtonData {
  text: string;
  link: string;
}

export interface HeroData {
  greeting: string;
  firstName: string;
  lastName: string;
  roles: string;
  imagePath: string;
  buttons: {
    primary: ButtonData;
    secondary: ButtonData;
  };
  socialLinks: {
    linkedin: string;
  };
}

export interface FocusSectionItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FocusSectionData {
  heading: string;
  subHeading: string;
  items: FocusSectionItem[];
}

export interface ProjectItem {
  id: number;
  title: string;
  tagline: string;
  description: string[];
  videoUrl: string;
  results: string[];
}

export interface ProjectsSectionData {
  heading: string;
  subHeading: string;
  projects: ProjectItem[];
}

export interface ExpectFromMeItem {
  title: string;
  content: string;
}

export interface ExpectFromMeData {
  sectionSubtitle: string;
  sectionTitle: string;
  items: Record<string, ExpectFromMeItem>;
}

export interface CaseStudyData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  results: string[];
}

export interface HowIApproachData {
  leftTitle: string;
  steps: { title: string; description: string }[];
  rightTitle: string;
  industries: { category: string; client: string }[];
}

export interface ExpertiseData {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}

export interface TestimonialData {
  sectionTitle: string;
  items: { quote: string; author: string; image: string }[];
}

export interface CreativeWorkData {
  sectionTitle: string;
  items: { title: string; caption: string; video: string }[];
}

export interface CTAData {
  title: string;
  button: ButtonData;
}

export interface QuoteData {
  text: string;
}

export interface FooterData {
  left: {
    name: string;
    role: string;
    description: string;
  };
  middle: {
    title: string;
    links: { label: string; link: string }[];
  };
  right: {
    title: string;
    links: { label: string; link: string }[];
  };
}

export interface ContactSectionData {
  title: string;
  oneLookDetails: { label: string; value: string }[];
  cards: {
    left: { text: string; value: string };
    right: { text: string; value: string };
  };
  formTitle: string;
  copyright: string;
}

export interface PortfolioData {
  hero: HeroData;
  focusSection: FocusSectionData;
  projectsSection: ProjectsSectionData;
  expectFromMe: ExpectFromMeData;
  howIApproach: HowIApproachData;
  expertise: ExpertiseData;
  testimonials: TestimonialData;
  creativeWork: CreativeWorkData;
  cta: CTAData;
  quote: QuoteData;
  footer: FooterData;
  contactSection: ContactSectionData;
}
