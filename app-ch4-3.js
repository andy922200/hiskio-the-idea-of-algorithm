const numbers = [
  9,
  12,
  15,
  18,
  19,
  20,
  22,
  25,
  26,
  26,
  33,
  37,
  38,
  41,
  47,
  47,
  50,
  55,
  57,
  60,
  68,
  80,
  87,
  90,
  98,
  100,
  103,
  108,
  109,
  109,
  116,
  120,
  120,
  124,
  127,
  128,
  131,
  135,
  135,
  139,
  143,
  145,
  151,
  155,
  156,
  158,
  163,
  164,
  165,
  169,
  169,
  173,
  174,
  176,
  177,
  178,
  181,
  182,
  182,
  183,
  184,
  189,
  192,
  195,
  200,
  201,
  203,
  204,
  207,
  213,
  217,
  222,
  222,
  222,
  227,
  228,
  233,
  235,
  237,
  239,
  239,
  243,
  248,
  251,
  252,
  257,
  260,
  260,
  263,
  268,
  270,
  271,
  271,
  276,
  281,
  284,
  285,
  295,
  297,
  298,
];

function binarySearch(arr, n){
  let min = 0
  let max = arr.length - 1
  let step = 0

  while(min<=max){
    const middle = Math.floor((min+max)/2)
    step++

    if(arr[middle] < n){
      min = middle + 1
    }else if(arr[middle] > n){
      max = middle - 1
    }else{
      console.log(`After ${step} steps...`)
      console.log(`The target number ${n} is at position ${middle}.`)
      return middle
    }
  }

  console.log(`The target number ${n} cannot be found.`)
  return -1
}

binarySearch(numbers, 169); // 6 - 7
