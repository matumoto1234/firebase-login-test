# firebase-login-test

Firebase AuthenticationでのGoogleログインとかを試すやつ

GitHub Pages : https://matumoto1234.github.io/firebase-login-test/

## 実装の流れ

1. Firebaseでプロジェクトを作って、「アプリを追加」とかで`API_KEY`などのconfigを見られる状態にしておく
1. それを環境変数（このリポジトリではGitHubのsecrets）に入れてビルド時に読み込む
1. [JavaScriptでGoogleを使用して認証する](https://firebase.google.com/docs/auth/web/google-signin?hl=ja#web-version-9_2)あたりの記事を読んで実装
1. 実装したら動かす（このリポジトリではindex.js）

## 細かい部分

### `process.env`周り

環境変数読み込むんだったらビルド時の設定（webpack.config.js）で使えるようにしておく必要がある

普通に`process.env`を使おうとしても`NODE_ENV`くらいしかプロパティが無いので注意

### Googleのトークンは使えるの？

使える

[Firebase SDK でログイン フローを処理する](https://firebase.google.com/docs/auth/web/google-signin?hl=ja#handle_the_sign-in_flow_with_the_firebase_sdk)のコードとか見ればわかる  
`GoogleAuthProvider.credentialFromResult(result)`の部分とか

### ドメインの許可

Googleのポップアップを開こうとしたらドメイン許可されていないので開けないというエラーがあった

Firebaseコンソール→Authentication→Settings→承認済みドメイン に行ってドメインを追加すればOK
