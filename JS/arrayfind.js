const array = ["a", "b", "c"];

const result = array.includes("a");
console.log(result); //있으면  true

const result1 = array.indexOf("a");
console.log(result1); //a의 인덱스 번째 수 0

const result2 = array.lastIndexOf("a");
console.log(result2); //뒤에서 a의 인덱스 번째 수 0

const result3 = array.indexOf("d");
console.log(result3); //없으면 -1

const arr = ["가", "라", "다", "라", "마", "라"];

let index = arr.indexOf("라");
while (index > -1) {
  arr.splice(index, 1);
  index = arr.indexOf("라");
}

console.log(arr);

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>끝말잇기</title>
</head>
<body>
    <div>
          <span id="order"></span>번째 참가자
        </div>
        <div>
          제시어: <span id="word"></span>
        </div>
        <input type="text"></input>
        <button>입력</button>  
      <script>
        const number = Number(prompt("몇 명?"));
        const $button = document.querySelector("button");
        const $input = document.querySelector("input");
        const $word = document.querySelector("#word");
        const $order = document.querySelector("#order");
    
        let word;
        let newWord;
    
const onClickButton=()=>{
    if (!word || word[word.length - 1] === newWord[0]) {
      if(word.length ===3){
        word = newWord;
            $word.textContent = word;
            const order = Number($order.textContent);
            if (order + 1 > number) {
              $order.textContent = 1;
            } else {
              $order.textContent = order + 1;
            }
           }
               }  else {
              alert("단어를 확인해주세요");
            }
            $input.value = "";
            $input.focus();
          }

const onInput=(e)=>{
    newWord=e.target.value
}
        $input.addEventListener("input", onInput
        );
        $button.addEventListener("click", onClickButton
                );
      </script>
</body>
</html>