$(document).ready( function (){

    $('.initNav').on('click', function(){
        $('.customNav').toggle();
    })

    $.ajax({
        url: "http://demo6292426.mockable.io/more-store",
        success: function(data){
            resultado = data.filter( res => res.isActive == true ).slice(0, 3)
            resultado.forEach( item => {
                console.log( item.nameOfProduct)
                console.log( item.price)
                console.log('----');
            });
        }
    })
})