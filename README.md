Index
はじめに
create-plugin とは
インストール方法
基本の使い方
詳細
オプション機能
おわりに
注意事項
はじめに
kintone のプラグイン開発をもっと簡単にできるようにしたプラグイン開発支援ツール群を公開しました。

今回はその中の create-plugin について説明します。

※その他のツールについてはこちら。

create-plugin とは
対話形式で kintone プラグインの雛形を作成することができる CLI ツールです。

npm に対応しているため、Windows/macOS/Linux どの環境でも簡単に実行することができます。

ソースコードは GitHub に公開しています。

※ こちらのツールの利用に必要な Node.js のバージョンは、リポジトリの package.json にある engines プロパティをご参照ください。
例：次の記載の場合、Node.js のバージョンは 10 以上が必要です。

"engines": {
"node": ">=10"
},
Copy クリップボードにコピーしました
Copy クリップボードにコピーしました
Copy クリップボードにコピーしました
インストール方法
create-plugin をインストールします。

※ ここでは、npm によるグローバルインストールを例にあげます。

$ npm install -g @kintone/create-plugin
Copy クリップボードにコピーしました
こちらのコマンドを実行することで、create-plugin をインストールすることができます。

基本の使い方
dir_name に作成したいディレクトリ名を入力すると、自動でディレクトリが作成されます。

$ create-kintone-plugin dir_name
Copy クリップボードにコピーしました
本記事では、sample というディレクトリ名で雛形を作ります。

$ create-kintone-plugin sample

kintone プラグインのプロジェクトを作成するために、いくつかの質問に答えてください :)
では、はじめましょう！

? プラグインの英語名を入力してください [1-64 文字] sample
? プラグインの説明を入力してください [1-200 文字] sample
? 日本語をサポートしますか？ Yes
? プラグインの日本語名を入力してください [1-64 文字] (省略可)
? プラグインの日本語の説明を入力してください [1-200 文字] (省略可)
? 中国語をサポートしますか？ No
? プラグインの英語の Web サイト URL を入力してください (省略可)
? プラグインの日本語の Web サイト URL を入力してください (省略可)
? モバイルページをサポートしますか？ No
? @kintone/plugin-uploader を使いますか？ Yes
Copy クリップボードにコピーしました
sample ディレクトリが生成され、
その中にプラグインの雛形となる src ディレクトリ/ファイルが生成されています。

$ tree sample
sample
├── node_modules/../..
├── package-lock.json
├── package.json
├── private.ppk
├── scripts
│ └── npm-start.js
└── src
├── css
│ ├── 51-modern-default.css
│ ├── config.css
│ └── desktop.css
├── html
│ └── config.html
├── image
│ └── icon.png
├── js
│ ├── config.js
│ └── desktop.js
└── manifest.json
Copy クリップボードにコピーしました
※ package-lock.json は npm5 以上で実行すると生成されるファイルです。

詳細
雛形の詳細
生成される雛形 (src ディレクトリ) は以下のような構成になっています。それぞれのファイルの詳細はこちらの記事をご覧ください。

image5.png

生成されたプラグインの内容
生成された雛形にはレコード一覧画面の上部に任意の文字を表示する処理が書かれています。
表示させる文字はプラグインの設定画面で入力できます。

image2.png

プラグイン設定画面
image3.png

オプション機能
この create-plugin には雛形を作成する以外にも便利な機能が搭載されています。

ESLint を利用したソースコードチェック
ESLint を使って JavaScript のソースコードをチェックすることができます。

# 作成したディレクトリへ移動する

cd sample

# エラーチェックを実行する

$ npm run lint
Copy クリップボードにコピーしました
自動パッケージング & 自動アップロード
作成したプラグインディレクトリに対して、下記のコマンドを実行することでプラグイン zip ファイルを作成します。

# 作成したディレクトリへ移動する

$ cd sample

# 自動処理を実行する

$ npm start
Copy クリップボードにコピーしました
また、create-plugin 実行時に「@kintone/plugin-uploader を使う」を選んだ場合、
そのまま plugin-uploader が実行されます。

※plugin-uploader を利用するためには kintone の管理者権限を持ったユーザー で実行する必要があります。

・・・

Scceeded: dist/plugin.zip

# 対話形式で環境情報を入力

? kintone のドメインを入力してください (example.cybozu.com): <サブドメイン>.cybozu.com
? ログイン名を入力してください: <ログイン名>
? パスワードを入力してください: <パスワード>

> Open https://<サブドメイン>.cybozu.com/login?saml=off
> Try to logged-in...
> Navigate to https://<サブドメイン>.cybozu.com/k/admin/system/plugin/
> Try to upload plugin.zip
> plugin.zip をアップロードしました!
> Copy クリップボードにコピーしました
> その後監視モードになるため、そのまま実行した状態でソースコードを修正すると
> パッケージングとアップロードが実行されて kintone へ適用されるようになります。

※ 監視を中止する場合は、「ctrl + c」でコマンドをキャンセルしてください。

おわりに
このツール 1 つでプラグインの雛形作成からエラーチェック、パッケージング、アップロードを全てを行うことができます。

これからプラグイン開発を始めたいという方はぜひご活用ください。

注意事項
ソースコードの変更および再配布、商用利用等はライセンスに従ってご利用可能です。
