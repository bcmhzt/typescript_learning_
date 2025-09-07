import { useState } from "react";

/*
stringとnumberの違いに注意
  - stringは文字列
  - numberは数値
  - number型の配列は、[1, 2, 3]のように書く
  - string型の配列は、["1", "2", "3"]のように書く
  - number型の配列をstring型の配列に変換するには、mapを使う
    - 例えば、[1, 2, 3].map((num) => num.toString())のように書く
    - toString()は、数値を文字列に変換するメソッド
    - mapは、配列の各要素に対して関数を適用し、新しい配列を作るメソッド
    - mapの中で使う関数は、アロー関数で書くことが多い
*/

const TypescriptBasics2 = () => {
  const [items, setItems] = useState<string[]>([]);

  const addNumber = () => {
    setItems((prev) => [...prev, (prev.length + 1).toString()]);
  };

  return (
    <div>
      <h1>typescript_learning_</h1>
      <h2>Typescriptの基礎</h2>
      <button onClick={addNumber}>+</button>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
};

export default TypescriptBasics2;

// const TypescriptBasics2 = () => {
//   const [items, setItems] = useState<number[]>([]);

//   const addNumber = () => {
//     setItems((prev) => [...prev, prev.length + 1]);
//   };

//   return (
//     <div>
//       <h1>typescript_learning_</h1>
//       <h2>Typescriptの基礎</h2>
//       <button onClick={addNumber}>+</button>
//       <pre>{JSON.stringify(items, null, 2)}</pre>
//     </div>
//   );
// };

// export default TypescriptBasics2;
