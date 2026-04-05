export interface Fighter {
  name: string;
  desc: string;
  img: string;
}

export interface Collection {
  id: string;
  name: string;
  price: string;
  count: number;
  image: string;
  url: string;
  isNew?: boolean;
  desc?: string;
}

export interface TokenomicsData {
  name: string;
  value: number;
  color: string;
  desc: string;
}

export interface Watchface {
  name: string;
  id: string;
  url: string;
}
