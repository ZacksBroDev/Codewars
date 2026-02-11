function solution(str) {
  // return str.split("").reverse().join("");  
  let String = "";
  for(let i = str.length-1; i >= 0; i--){
    String += str[i];
  }
  return String;
}

console.log(solution("world")); // dlrow