function add(num1, num2) {
    let i=num1.length-1;
    let j=num2.length-1;
    let carry=0;
    let res='';
    while(i>=0 || j>=0 || carry){
       let sum = 0;
       if(i>=0)sum+=(num1[i--]-'0');
       if(j>=0)sum+=(num2[j--]-'0');
       if(carry)sum+=carry;
       carry=Math.floor(sum/10);
       let rem = sum%10;
       res=rem+res;
    }
  return res;
  }