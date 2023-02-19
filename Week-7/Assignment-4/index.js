function paranthesisCheck(array) {
  let eval = [];

  for (let i = 0; i < array.length; i++) {

    switch (array[i]) {

      case "}":
        if (eval.pop() === "{") {
            continue;
        } else {
            return false;
        }

      case "]":
        if ("[" == eval.pop()) {
            continue;
        } else {
            return false;
        }

      case ")":
        if (eval.pop() === "(") {
            continue;
        } else {
            return false;
        }

        default: 
            eval.push(array[i]);
    }
  }

  if (eval.length === 0) {
    return true;
  } else {
    return false;
  }

}

console.log(paranthesisCheck(["{", "(", "[", "]", ")", "}"]));
console.log(paranthesisCheck(["(", "[", "]"]));
console.log(paranthesisCheck(["(", ")"]));
