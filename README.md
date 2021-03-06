# functional-programming-with-typescript
Functional programming with TypeScript 💊

```
tr 'A-Z' 'a-z' < text | uniq | sort
```

上記の様な Unix コマンドがある。このコードは `text` ファイルを大文字から小文字に変換し、重複を削除し、その残りをソートしていることをひと目で理解できる。

関数型プログラミングでは、同じ様に入出力を明確に規定した小さなプログラミングを繋ぎ合わせて複雑なタスクを解決する。
また、副作用を避けアプリケーションにおける状態遷移を減らすために、データに関する制御フローと処理を抽象化する。

状態の不在と不変性を可能な限り追求し、プログラムの理解を容易にするパラダイムである。

## memo
- [ ] データ定義文（DDL=Data Definition Language)
  - [ ] CREATE: データベースオブジェクト(テーブル、インデックス、制約など)を定義する
  - [ ] DROP: データベースオブジェクトを削除する
  - [ ] ALTER: データベースオブジェクトの定義を変更する
- [ ] データ操作文（DML=Data Manipulate Language)
  - [ ] INSERT INTO: レコードを挿入
  - [ ] UPDATE ～ SET: レコードを更新
  - [ ] DELETE FROM: レコードを削除
  - [ ] SELECT ～ FROM ～ WHERE: レコードを検索し、結果集合を取り出す

データが「どのように」得られるのかではなく、データの出力が「何か」をコードで説明する

SQLライクな javascript にする？構成

```
_.from(persons).where(p=>p.birthYear>1900&&p.address.country!=='US').sortBy(['firstname']).select(p=>p.firstname).value();
```

- [ ] 作成
  - [ ] オブジェクト
  - [ ] 配列
- [ ] 検索
  - [ ] オブジェクト
  - [ ] 配列
- [ ] 集約
- [ ] 並び替え
- [ ] 更新
