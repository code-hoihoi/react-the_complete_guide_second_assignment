Udemyで提供されている「React - The Complete Guide」コースの１つ目の課題です。

インストラクターから実装すべきタスクをリストアップされ、それらを独力で実装しました。
したがって、100%自分で書いたJavaScript/Reactのコードを格納したリポジトリとなります。

実装したタスクは以下のとおり。
1. インプットのテキストボックスを作成し、入力値をボックスのすぐ下に出力する
2. テキストの文字数をpropとして受け取る新しい子コンポーネント(ValidationComponent)を定義する
3. 2番のタスクで定義したコンポーネント(ValidationComponent)に、"文字数が多すぎます/少なすぎます"といったメッセージを動的に表示する
4. 新たなコンポーネント(CharComponent)を定義し、inline boxとして適切なスタイリングを施す(=> display: inline block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
5. 1番のテキストボックスに入力された一つ一つの文字を、4番で定義したコンポーネント(CharComponent)でレンダリングする
6. コンポーネント(CharComponent)はクリックすると消えるようにし、またインプットのテキストボックス内の文字列もその変化に応じて同期をとるように変化する

実装に際してのヒント: JavaScriptの文字列は基本的には配列である。(キャラクターの配列 = 文字列)
　

This is the second assignment from React - The Complete Guide(incl Hooks, React Router, Redux).  
The course link is https://www.udemy.com/course/react-the-complete-guide-incl-redux/  
The code presented here is 100% my own work. No copy from other resources or no imitation of tutorials.

The assignment instruction is below.
- Assignment #2 -
You'll also need to transform a string into a real array and then join it back into a string again to complete task 5 of the assignment.
You can split a string into an array of its characters with the split('')  method. By passing just an empty string, it's split after every character.
You may then re-create a string from that array by using join('')  - again, joining with an empty string as a separator.
1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it. (e.g. in a paragraph).
2. Create a new component (=> ValidationComponent) which receives the text length as a prop
3. Inside the ValidationComponent, either output “Text too short” or “Text long enough” depending on the text length (e.g. takes 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.

Hint: Keep in mind that JavaScript strings are basically arrays!
