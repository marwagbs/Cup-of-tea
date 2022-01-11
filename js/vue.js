new Vue({
  el: '#app',
  data: {
      cart:0,
    selected: '9.00€',
    options: [
      { text: 'Sachet de 100g', value: '9.00€' },
      { text: 'Sachet de 500g', value: '40.00€' },
      { text: 'Sachet de 1Kg',  value: '75.00€' }
    ],
    i:0,
    price:0,
  },
    methods:{
       editBasket(){
         for(this.i in this.options)
              this.price=parseFloat(this.options[this.i].value),
              console.log(this.price);
              this.cart+=this.price;
              console.log("cliqué")
       }
    }

})