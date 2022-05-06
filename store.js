if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}
function ready(){
    var removeCatItemButtons = document.getElementsByClassName('btn-danger')

for(var i=0; i<removeCatItemButtons.length;i++)
{
    var button = removeCatItemButtons[i]
    button.addEventListener('click', removeCartItem )
      
    
}
var quantityInputs = document.getElementsByClassName('quantity')
for(var i=0; i<quantityInputs.length;i++){
  var input = quantityInputs[i]
  input.addEventListener('change', quantityChanged)
 }
 var addToCartButtons = document.getElementsByClassName('shop-item')
 for(var i=0; i<addToCartButtons.length;i++){
   var button = addToCartButtons[i]
   button.addEventListener('click', addToCartClicked)

 }

}
/////Rmove function From Cart////////
function removeCartItem(event){
    var butonClicked = event.target
    butonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}



///Function for quantity box//////////
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value<=0) {
        input.value=1
    }
    updateCartTotal()
}

///Function for add to cart//////

function addToCartClicked(event){
var button = event.target
var shopItem = button.parentElement.parentElement.parentElement
var title = shopItem.getElementsByClassName('item-title')[0].innerText
var price = shopItem.getElementsByClassName('item-price')[0].innerText
var imgSrc = shopItem.getElementsByClassName('shop-item-img')[0].src
console.log(title,price,imgSrc)
addItemToCart(title, price, imgSrc)

}

function addItemToCart(title,price,imgSrc){
    var cartRow = document.createElement('div')
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-page')[0]
       
}



//////not working/////
function updateCartTotal(){
var carItemContainer = document.getElementsByClassName('cart-page')[0]
var cartInfos = carItemContainer.getElementsByClassName('cart-info')
var total = 0
for(var i=0; i<cartInfos.length;i++){
    var cartInfo = cartInfos[i]
    var priceElement = cartInfo.getElementsByClassName('cart-total-price')[0]
    var quantityElement = cartInfo.getElementsByClassName('quantity')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value()
    total = total + (price * quantity)    
  console.log(priceElement,quantityElement)
}
document.getElementsByClassName('cart-total-price')[0].appendChild = '$' + total
}