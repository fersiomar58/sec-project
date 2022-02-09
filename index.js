// console.log(document);
// console.log(document.getElementById("total"));







const btnPlusTag = document.getElementsByClassName("plus");
const checkBox=document.getElementsByClassName("check")
console.log(checkBox);
// console.log(btnPlus);
for (var i = 0; i < btnPlusTag.length; i++) {
  // to change the quentity with plus
  btnPlusTag[i].addEventListener("click", increment);
  checkBox[i].addEventListener("click",totalPrice)
}

function increment(event) {
  // console.log(event);
  var btnPlus = event.target;
  // console.log(btnPlus);
  var divElt = btnPlus.parentElement;
  // console.log(divElt);
  var quentityTag = divElt.querySelector("p");
  //   console.log(quentityTag);
  var qunetityValue = Number(quentityTag.innerHTML);
  // console.log(typeof(qunetityValue));
  qunetityValue++;
  // console.log(qunetityValue);
  quentityTag.innerHTML = qunetityValue;
  var trElt = divElt.parentElement.parentElement;
  // console.log(trElt);
  var unietPriceValue = Number(trElt.querySelector(".unitePrice").innerHTML);
  // console.log(unietPriceValue);
  var priceTag = trElt.querySelector(".price");
  // console.log(priceTag);
  var priceValue = Number(priceTag.innerHTML);
  // console.log(priceValue);
  priceValue = qunetityValue * unietPriceValue;
  priceTag.innerHTML = priceValue;
  // var totalTag = document.getElementById("total");
  // // console.log(totalTag);
  // var totalValue = Number(totalTag.innerHTML);
  // // console.log(totalValue);
  // totalValue += priceValue;
  // totalTag.innerHTML = totalValue;
}

function totalPrice(e){
    var checkbox=e.target
    // console.log(checkbox);
    var priceValue=Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML)
    // console.log(typeof(priceValue));
    var totalTag=document.getElementById("total");
    // console.log(totalTag)
    var totalValue=Number(totalTag.innerHTML)
    // console.log(totalValue)
    if(checkbox.checked===true){
  totalValue+=priceValue
    }else{
      // priceValue=0
      totalValue-=priceValue
    }
  
    totalTag.innerHTML=totalValue
  }