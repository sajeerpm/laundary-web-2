export enum SelectedPage {
  Home = "home",
  Pricing = "pricing",
  Services = "services",
  HowItWorks = "howitworks",
  Areas = "areas",
  Faqs = "faqs",
  Corperates = "corperates",
  Login = "login",
  Branches = "branches",
  Account = "account",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
