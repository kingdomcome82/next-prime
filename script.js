function nextPrime() {
  var currNumber = document.querySelector("#display")

  if (currNumber.textContent==='') {
    currNumber.textContent = 1
  } else {
  var start = currNumber.textContent
  exitLoop:
  while(true) {
    start++
    if(isPrime(start)){
      currNumber.textContent = start;
      break exitLoop;
    }
    }
  }
}

function isPrime(input) {
  let prime = true;
  let limit = Math.sqrt(input);
  for (let i=2;i<=limit;i++) {
    if (input%i == 0) {
      prime = false;
      break;
    }
  }
  return prime && (input > 1);
}

function reset() {
  document.querySelector("#display").textContent = '';
}
