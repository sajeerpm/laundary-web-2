import { Address } from "./Address";

export interface Registration {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: Address | undefined;
}
