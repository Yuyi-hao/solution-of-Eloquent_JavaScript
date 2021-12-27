// question 3
let strigns = "# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n";
console.log(strigns);

let length = 10;
let width = 10;
let template = "# ";
let wstring = template.repeat(width);
let trumstring = wstring.substring(width-1,wstring)

let n = -1

for(let i = 0;i<length; i++){
    n*=(-1); 
    if(n==1){
        console.log(trumstring);
    }
    else{
        console.log(" "+trumstring);
    }
}