$(document).ready( function (){
    $.ajax({
        url: "http://demo6292426.mockable.io/more-store",
        success: function(data){
            resultado = data.filter( res => res.isActive == true ).slice(0, 3)
            console.log(resultado);
        }
    })
})