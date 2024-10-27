export default function mean(array) {
    if(!array.length) return NaN;
    return array.reduce((sum , num) =>{ sum += num; return sum; })/array.length;
  }