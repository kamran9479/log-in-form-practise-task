document.getElementById('log-in-button')
.addEventListener('click', function(event){
    event.preventDefault();

   const numberInput = document.getElementById('number-input').value;
   const pinNumber = document.getElementById('pin-input').value;

   if(numberInput === '01734989479' && pinNumber === 'fuckyou' ){
    console.log('okey')

   }
   else{
    alert('hauyar pola thik number/Pin de !')
   }
    
})