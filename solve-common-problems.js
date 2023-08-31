// Problem-1
function cubeNumber(number){
  if (typeof number !== 'number'){
    return 'please provide a number'
  }else if (number <=0){
    return 'please provide a positive number'
  }else {
    const cube = number * number * number;
    return cube;
  }
}
// console.log(cubeNumber(3))
// console.log(cubeNumber(4))

// Problem-2
function matchFinder(string1, string2){
  if (typeof string1 !== 'string' || typeof string2 !== 'string'){
    return 'please provide valid strings'
  }else if (string1.includes(string2)){
    return true;
  }else {
    return false;
  }
}
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", "Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));

// Problem-3
function sortMaker(arr) {
  if (arr[0]<0 || arr[1]<0){
    return 'Invalid Input';
  }
  if (arr[0] === arr[1]) {
      return 'equal';
  } else if (arr[0] < arr[1]) {
      return [arr[1], arr[0]];
  } else {
      return arr;
  }
}
// console.log(sortMaker([2,3]));
// console.log(sortMaker([4,2]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([1,2]));
// console.log(sortMaker([4,-4]));

// Problem-4
function findAddress(obj){
  if (typeof obj !== 'object'){
    return 'please provide me a valid object'
  }else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return street + ',' + house + ',' + society;
  }
}
const obj = {
  street: 10,
  house: '15A',
  society:'Earth Perfect'
}

// console.log(findAddress({street: 10, house: "15A", society: "Earth Perfect"}));
// console.log(findAddress({street: 10, society: "Earth Perfect"}));
// console.log(findAddress({street: 10}));

// Problem-5
function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return 'You cannot keep this array as empty';
  }
  let sumOfTaka = 0;
  for (let i = 0; i < changeArray.length; i++) {
    sumOfTaka += changeArray[i];
  }
  return sumOfTaka >= totalDue;
}
// console.log(canPay([1, 2, 5], 10));
// console.log(canPay([1, 5, 5], 10));



