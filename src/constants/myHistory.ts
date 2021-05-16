export interface MyHistory {
  date: string;
  business?: boolean
  description: string;
  content?: JSX.Element;
}

export const myHistory: MyHistory[] = [
  {
    date: "2020-04",
    business: true,
    description: "個人事業を開始する",
  },
  {
    date: "2019-06",
    business: true,
    description: "ベンチャー企業の1人目の社員として採用される"
  },
  {
    date: "2016-05",
    business: true,
    description: "中小SIer(社員数: 200名)の社員として採用される"
  },
  {
    date: "",
    description: ""
  },
  {
    date: "",
    description: ""
  },
  {
    date: "",
    description: ""
  },
  {
    date: "",
    description: ""
  },
];
