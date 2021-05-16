import React from "react";
import { ReactText } from "react";

export interface MyHistory {
  date: string;
  business?: boolean;
  description: string;
  content?: JSX.Element | ReactText;
}

export const myHistory: MyHistory[] = [
  {
    date: "2020-04",
    business: true,
    description: "個人事業を開始する",
    content: (
      <dl>
        <dt>屋号の由来</dt>
        <dd>
          当時尊敬していた先輩個人事業主が、○○workという屋号を使っていたため。
        </dd>
        <dt>主な活動</dt>
        <dd>個人事業主が利用するIT機器を活用するためのアドバイス</dd>
        <dd>センシング用のハードウェアや学習機器の開発</dd>
        <dd>ホームページ制作</dd>
      </dl>
    ),
  },
  {
    date: "2019-06",
    business: true,
    description: "ベンチャー企業の1人目の社員として採用される",
    content: (
      <>
        <p>創業期において1人目の技術者として採用された。</p>
        <p>
          PLとして小規模なチームで開発を行いながら、社内インフラ業務も兼任している。創業期の何でも屋マインドで、未成熟な会社において発生する様々な問題に日々立ち向かう。
        </p>
        <p>
          開発実績多数。様々な業種の顧客に提案を行い、開発から運用までワンストップで提供している。
        </p>
      </>
    ),
  },
  {
    date: "2016-05",
    business: true,
    description: "中小SIer(社員数: 200名)の社員として採用される",
    content: (
      <>
        <p>プログラマーとして採用される。</p>
        <p>新卒扱いで入社し、3ヶ月の研修を同期内で最も優秀な成績で修了。</p>
        <p>
          開発が遅延しているプロジェクトに参画した際には、システムテストやUIテストの自動化を積極的に行い、テスト工数の削減とスケジュールの回復に寄与した。
        </p>
      </>
    ),
  },
  {
    date: "",
    description: "",
  },
  {
    date: "",
    description: "",
  },
  {
    date: "",
    description: "",
  },
  {
    date: "",
    description: "",
  },
];
