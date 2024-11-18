function check()  {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result;
    let bmi;
    bmi = weight/(height*2);
   if( bmi<18.5){
       result = 'result :' + 'Underweight:' ;
   }else if(18.5<=bmi<25.0 ){
         result = 'result :' + 'Normal:' ;
   }else if(15.0<=bmi<30.0){
         result = 'result :' + 'Overweight:' ;
   }else {
       result = 'result :' + 'Obese:' ;
   }
   document.getElementById('result').innerHTML = result;
}