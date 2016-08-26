angular.module('app')

.filter('percentage', function(){
    return function (input, decimals){

    // si no es numerico....
    if( isNaN(parseFloat(decimals)) || !isFinite(decimals) ){
      decimals = 0;
    }

    // si es numerico...
    if(!isNaN(parseFloat(input)) && isFinite(input)){
      if(decimals>0)
        return (input * 100).toFixed(decimals) + '%';
      else
        return Math.round(input * 100) + '%';
    }
  };
});
