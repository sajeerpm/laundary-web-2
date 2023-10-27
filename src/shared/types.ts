export enum SelectedPage {
  Home = "/",
  Pricing = "/pricing",
  Services = "/services",
  HowItWorks = "/howitworks",
  Areas = "/areas",
  Faqs = "/faqs",
  Corperates = "/corperates",
  Login = "/login",
  Signup = "/signup",
  Branches = "/branches",
  Account = "/account",
  Order = "order",
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
