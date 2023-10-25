let a=0,n=parseInt(prompt("Enter the number"));

for(let i=1;i<=n;i++){
    for(let k=1;k<=(n-i);k++){
        document.write("&nbsp");
    }
    for(let j=1;j<=i;j++){
        a=a+1;
        document.write(a+" ");
    }
    document.write("<br>");
}