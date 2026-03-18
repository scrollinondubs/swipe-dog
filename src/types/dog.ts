export interface Shelter {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
}

export interface DogProfile {
  id: string;
  name: string;
  age: number;
  breed: string;
  size: "Small" | "Medium" | "Large";
  description: string;
  imageUrl: string;
  shelter: Shelter;
  traits: string[];
}
