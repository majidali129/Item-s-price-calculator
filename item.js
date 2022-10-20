let totalPrice = document.getElementById("btn");
totalPrice.addEventListener("click",()=>{
   
   
    let price = document.getElementById("itemPrice");
    let discount = document.getElementById("itemDiscount");
    let tax = document.getElementById("itemTax");
    // console.log(price,discount,tax)

    if(price.value=="" || discount.value=="" ||tax.value==""){
        alert("Sorry! You can't submit empty form")
    }else{

    
        discount.value = (discount.value/100)*price.value;
        document.getElementById("finalDiscount").innerHTML = discount.value;
        price = price.value - discount.value;
        console.log(discount.value)
        console.log(price);
        document.getElementById("totalBill").innerHTML = parseInt(price) + parseInt(tax.value);
    }





})