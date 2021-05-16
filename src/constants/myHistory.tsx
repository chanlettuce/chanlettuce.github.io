import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import React, { ReactText } from 'react';
import { KamikochiImg } from '../components/atoms/KamikochiImg';
import { KasaImg } from '../components/atoms/KasaImg';

export interface MyHistory {
  date: string;
  business?: boolean;
  description: string;
  content?: JSX.Element | ReactText;
}

export const myHistory: MyHistory[] = [
  {
    date: '2020-04',
    business: true,
    description: '個人事業を開始する',
    content: (
      <dl>
        <dt>屋号の由来</dt>
        <dd>
          当時尊敬していた先輩個人事業主が、○○workという屋号を使っていたため。
        </dd>
        <dt>主な活動</dt>
        <dd>
          <ul>
            <li>個人事業主が利用するIT機器を活用するためのアドバイス</li>
            <li>センシング用のハードウェアや学習機器の開発</li>
            <li>製品の販売サイトの構築</li>
            <li>ホームページ制作</li>
          </ul>
        </dd>
      </dl>
    ),
  },
  {
    date: '2019-06',
    business: true,
    description: 'ベンチャー企業の1人目の社員として採用される',
    content: (
      <>
        <p>
          創業期において1人目の技術者として採用された。
          <br />
          PLとして小規模なチームで開発を行いながら、社内インフラ構築や保守の業務も兼任している。
          <br />
          創業期の何でも屋マインドで、未成熟な会社において発生する様々な問題に日々立ち向かう。
        </p>
        <p>
          開発実績多数。様々な業種の顧客に提案を行い、開発から運用までワンストップで提供している。
        </p>
      </>
    ),
  },
  {
    date: '2016-05',
    business: true,
    description: '中小SIer(社員数: 200名)の社員として採用される',
    content: (
      <>
        <p>
          プログラマーとして採用される。
          <br />
          新卒扱いで入社し、3ヶ月の研修を同期内で最も優秀な成績で修了。
        </p>
        <p>
          開発が遅延しているプロジェクトに参画した際には、システムテストやUIテストの自動化を積極的に行い、テスト工数の削減とスケジュールの回復に寄与した。
        </p>
        <p>上流工程から下流工程まで、幅広い業務に従事した。</p>
      </>
    ),
  },
  {
    date: '2015-11',
    description: '下界に戻る',
    content: (
      <>
        <p>山でのアルバイトを満期で終え、都内と千葉県を転々とする。</p>
        <p>
          いくつか仕事を転々とするうちに、IT業界での正社員就職を考えるようになる。
        </p>
        <KamikochiImg />
      </>
    ),
  },
  {
    date: '2015-06',
    description: '山送りになる',
    content: (
      <>
        <p>
          大学を中退してしまい、家を追われた自分。住み込みで働ける仕事を探したら見つかった。
          <br />
          3食付きで景色も最高とのことで、即決。
        </p>
        <div>
          そこは今まで住んでいたような場所とは別世界だった。
          <ul>
            <li>最寄りのコンビニまで往復6時間(徒歩4時間+バス2時間)</li>
            <li>携帯電話の電波は最寄りの山頂まで行かないと入らない</li>
            <li>風呂は3日に1回</li>
          </ul>
          <KasaImg />
        </div>
        <p>北アルプスの稜線上での住み込みアルバイトである。(標高: 2367m)</p>
      </>
    ),
  },
  {
    date: '2015-03',
    description: '大学を中退',
    content: (
      <>
        <p>やはり自分には向いていなかったようだ。</p>
        <p>
          情報科に転科したいと思ったときにはもう遅い。その時点での成績はボロボロだったのだ。
        </p>
      </>
    ),
  },
  {
    date: '2013-04',
    description: '東京都市大学 建築学科に入学',
    content: (
      <>
        <p>
          親などの周りの人間から情報学科に行くよう勧められたが、それに嫌気が差してしまい、反発心で建築学科を選んだ。
          <br />
          当時は大震災の直後であり、自分も復興に貢献できる技術者になりたいとの思いで入学したが……
        </p>
      </>
    ),
  },
  {
    date: '2006-10',
    description: '初めてプログラミングに触れる',
    content: (
      <>
        <p>
          言語はTiny BASIC
          <br />
          その後はC#を学び、Windowsデスクトップアプリケーションを開発していた。
        </p>
      </>
    ),
  },
  {
    date: '1994-02',
    description: '生誕',
    content: (
      <>
        <p>
          東京都足立区北千住で生まれる。
          <br />
          大学中退までの20年間を足立区で過ごす。
        </p>
      </>
    ),
  },
];

// {
//   date: "",
//   description: "",
// },
