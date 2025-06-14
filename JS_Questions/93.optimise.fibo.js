// please modify code below to make it work for large number like `fib(1000)`
// recursion should still be used

function fib(n,hash=new Map()){
  if (n === 0) return 0;
  if (n === 1) return 1;
  if(hash.has(n))return hash.get(n);
  const result = fib(n-1,hash)+fib(n-2,hash);
  hash.set(n,result)
  return result;
}