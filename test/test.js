// test code for 1 feature is known as test suite

import { moneyConversion } from "../scripts/utils/money.js";

console.log("test suite: money conversion");

console.log('converts cents into dollars: ');

if(moneyConversion(2095)=== '20.95'){
    console.log('passed')
}else{
    console.log("failed");
}

console.log('work with zero : ');

if(moneyConversion(0) === '0.00'){
    console.log('passed');
}else{
    console.log('failed')
}

console.log('checking the round off : ')

if(moneyConversion(2000.5)==='20.01'){
    console.log('passed');
}else{
    console.log('failed');
}