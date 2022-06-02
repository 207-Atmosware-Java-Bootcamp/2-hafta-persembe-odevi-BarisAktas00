

//Input alma
var input;
input=Number(prompt("1 Sayı Giriniz."));

while(isNaN(input)){
alert( "Lütfen Sayı Giriniz");
input=Number(prompt("Sayı Giriniz."));
}
while(input<0){
alert("Lütfen 0'dan büyük Sayı Giriniz")
input=Number(prompt("Sayı Giriniz."));
}



    document.write("Girilen Sayı: " + input);
    document.write("<br/>");
    document.write("Kaç Tane Sayı: ");

    //Inputa Kadar Sayıları Yazdırma
    var add=0;
for(var i=0;i<=input;i++){
    if(i===7){
        continue;
            }
        
           
    if(i>99){
break;
    }
    add++
}
document.write(add);
//SAyıların toplamı
document.write("<br/>");
var sum=0;

for(var i=0;i<=input;i++){
    if(i===7){
        continue;
            }
        


    if(i>99){
        break;
    }

    sum+=i;
    
}
document.write("Sayıların toplamı: ");
document.write(sum);

document.write("<br/>");



//Tek Sayı Adeti
var control;
var count=0;
for(var i=0;i<=input;i++){
    if(i===7){
        continue;
            }
        
if(i>99){
break;
}
    control=i%2;
  if(control===1) count++;
}
document.write("Tek sayı adedi: " + count);

document.write("<br/>");
document.write("Tek Sayılar: ");

// Tek Sayı yazdırma

for(var i=0;i<=input;i++){
    if(i===7){
        continue;
            }
        
    if(i>99){
    break;
    }
        control=i%2;
      if(control===1) document.write(i + " ");
    }

    document.write("<br/>");




//Çift Sayı Adeti
var ciftCount=0;
for(var i=0;i<=input;i++){
    if(i===7){
        continue;
            }
        
if(i>99){
break;
}
    control=i%2;
  if(control===0) ciftCount++; 
}
document.write("Çift sayı adedi: "+ ciftCount);
document.write("<br/>");

document.write("Çift Sayılar: ");
//Çift Sayı Yazdırma

for(var i=0;i<=input;i++){

    if(i>99){
        break;
    }
    control=i%2;
    if(control===0) document.write(i + " ");



}
//Tek Sayılar Toplamı
document.write("<br/>");


var control;
var tekSum=0;
for(var i=0;i<=input;i++){
    if(i>99){
        break;
        }
    

    control=i%2;
  if(control===1) {

    tekSum=tekSum+i
   
  }
 
}
document.write("Tek Sayılar toplamı: "+tekSum);

//Çift Sayılar Toplamı
var ciftSum=0;
for(var i=0;i<=input;i++){

         
if(i>99){
    break;
    }


     control=i%2;
    if(control===0){
     ciftSum+=i;
     }

}
document.write("<br/>");
document.write("Çift Sayılar Toplamı: " +ciftSum );


