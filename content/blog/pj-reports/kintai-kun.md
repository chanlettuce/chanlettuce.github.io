---
title: プロジェクトレポート(労務管理/賃金計算システム)
date: "2021-05-16T10:00+09:00"
description: 経歴書に記載のある、労務管理/賃金計算システムのレポートです。
---

## どのようなプロジェクトか

技術者派遣を行っている企業向けの勤怠と労務管理を行うアプリケーションの開発  
複数の給与形態、複数の雇用形態、複数の就業場所がある上に、常駐先の勤怠の締めと社内の締めが異なり、既存のパッケージのカスタマイズでは費用が非常に嵩むため、フルスクラッチでの開発を行った

2020末に初回リリースを行い、現在はユーザーからのフィードバックを受けてシステムを改善するフェーズ(2021/05現在)

## 自分の役割

プロジェクト立ち上げからプロジェクトリーダーとして参加(最大メンバー8名)  
要件定義、見積もり、技術選定、設計、実装、基盤構築、運用監視等、すべての工程に携わった

## どのように取り組んだか

### フロントエンド

テーブル数や属性値が多い業務アプリケーションであり、静的型付け言語は必須であると考えたため、TypeScriptを採用し、特定の検索条件、特定のページをブックマークして使用する用途が想定されたため、NextJSのSSRを利用するようにした

React等を用いたSPAの経験の浅いメンバーが多いため、コンポーネントごとにデータ取得をするような設計はせず、ページコンポーネントのgetServerSideProps等で同期的なデータ取得をするような設計を行った

### バックエンド

認証認可部分と業務部分を大きく分け、さらに業務部分は役割ごとにサーバーを分けてマイクロサービスとして開発した  
プロジェクト参画時はJavaの経験しかないメンバーが多かったため、Javaでバックエンドを書いていたが、フロントエンド開発を通じてTypeScriptに慣れたメンバーが大半になってからはバックエンドはNodeJS + Expressを用い、フロントエンドとバックエンドの開発言語を統一した

### 基盤周り

最初はAWSのECSとELBを用いた構成で本番環境を構築していたが、途中でコスト削減の依頼があったため、VPSにDocker Composeを入れて、そこで複数のコンテナを動かすように変更した  
VPSにSSHでログインし、アプリケーションを転送し、コマンドで起動するといった原始的な手段は煩わしかったため、Jenkinsを用いて自動でデプロイできるようにした

## 開発時に工夫したこと

### 段階的に言語を習得

JavaやjQueryのみの経験しかないメンバーや、新人プログラマー比率が高かったため、プロジェクト内で段階的に新しい技術に触れられるような工夫をした

具体的には

1. Spring Boot + Javaで単純なバックエンドAPIを書く
2. NextJS + TypeScriptで同期的なデータ取得をするような単純な画面を書く
3. Express + TypeScriptでローコードなバックエンドAPIを書けるようになる

これによってフロントエンドとバックエンドの開発言語を統一することが可能になり、後続プロジェクトでは工数を削減することができた

### 本番オペレーションの自動化

デプロイはシェルスクリプトやJenkins等を用いて自動化することによってヒューマンエラーを減らすようにした  
テストや死活監視の結果は適宜Slackのプロジェクトちゃんねるに通知するようにし、ダウンタイムが最小限になるようにした

### 自主性を重んじる

プロジェクト開始直後は細かく指示を出したりマージ前コードレビューをしていたが、自分の意見が通り過ぎるチームになってしまっていることを実感したため、メンバー全員が業務知識と採用技術に関してある程度の理解が深まった段階で、レビューを事後に行うようにした  
結果、各々が顧客意見を自分で取り込みリリースするサイクルが生まれた

## 困難だったこと

### NextJSの記事が非常に少ない

検索エンジンで得られる情報量がが非常に少なく、情報を得るのに非常に苦労した  
特に日本語記事は絶望的で、Nuxt(Vue)の記事がヒットしてしまうことが多かった  
英語の公式ドキュメントを見るという文化のあるメンバーが少なかったため、ペアプロ時には自分が率先して公式ドキュメントから必要な情報を探し当てる姿を見せることで、その文化を社内に浸透させた

### とにかく質問をされる

経験の浅いメンバーを多く抱えていたため、質問されることが多く、自分の時間を確保するのが困難で、自分自身の作業が遅延することが多々発生した  
このプロジェクトではメンバーが技術に慣れるまではその問題が解消されることはなかった

後続プロジェクトでは経験の浅いメンバーのサポートを手厚く行えるようなスケジュールを引くようにした

## 何を学んだか

新しい技術を採用したことによる困難にぶつかりながらプロジェクトを完遂するという体験から、学習コストとその後の運用コストに対する意識が非常に高まった  
顧客の職務規定や給与規定、業務フローの変更を伴うシステム化であり、関連法規を読み込むという経験から、法令対応のシステムを作ることに対する苦手意識がなくなった
