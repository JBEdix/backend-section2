module.exports = function(req, res, next){
    const queryStrings = req.query;

    //myapi.com?pageNum=5 esto viaja como un string. Debemos castearlo como un numero.
    for(const key in queryStrings){
        const length = queryStrings[key].length;
        const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));
        //los id de mongo son caracteres mayores a 20, por lo cual la funcion que tenemos no los casteara.
        if (isValid) {
            queryStrings[key]= parseInt(queryStrings[key]);
        }
    }

    req.query = queryStrings;
    next(); //netx Da acceso al proximo middleware de la cola de express
}