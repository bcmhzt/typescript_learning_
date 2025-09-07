import { useState } from "react";

/*
 const TypescriptBasics1: React.FC = () => { 
 ...
 というコンポーネントの型の書き方は、しない方がいい。
 普通に
 const TypescriptBasics1 = () => {
 ...
 の方が柔軟性がある。
 例えば、propsを受け取る場合に、React.FCだと型定義が面倒になる。
 なので、React.FCは使わない方がいい。
 ただし、propsの型定義はちゃんとすること。
 */
const TypescriptBasics1 = () => {
  // countという状態変数と、その更新関数setCountを作る
  const [count, setCount] = useState<number>(1);

  //   function increment() {
  //     setCount((prev) => prev + 1);
  //   }

  const increment = () => {
    // 現在の値に1を足す
    // prevは前の状態の値
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>typescript_learning_</h1>
      <h2>Typescriptの基礎</h2>
      <button onClick={increment}>+</button>
      <p>{count}</p>
    </div>
  );
};

export default TypescriptBasics1;
