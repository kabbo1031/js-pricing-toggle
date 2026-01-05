function changePrice(){
  const toggle = document.getElementById('toggle');
  const price = document.getElementById('price');

  price.innerText = toggle.checked
    ? '$100 / year (Save 20%)'
    : '$10 / month';
}
