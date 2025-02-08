// Task 1: What’s wrong with the code style below?
function pow(x,n)
{
    let result=1;
    for(let i=0;i<n;i++) {result*=x;}
    return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
    alert(pow(x,n))
}

// 1: curly brace is started on new line
// 2: no space between args
// 3: no space in for
// 4: no space in nested alert
// 5: on the line 12 too long line of code
// 6: no spaces around "="