var express =require('express')
var app =express()


app.use(express.static(__dirname + '/public'));
var adder=function(num1,num2){
    var result = num1+num2;
    return result
}
app.get('/test',function(req,res)

{
    var username=req.query.username;
    console.log('hit by'+username);
res.send('you got me ' +username);

}

)
app.get('/name',function(req,res)


{
    let accounts= [

{id:1,name:'alex',deposit:5},
{id:2,name:'sarah',deposit:5},
{id:3,name:'jim',deposit:15}
    ]
return res.send( Object.values (accounts));
app.get('/name/:nameid',function(req,res){
    return res.send(accounts [req.params.nameid]);
    });

}

)


app.get('/adder',function(req,res){
    var num1 =parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    var result=adder(num1,num2)
    res.send('the result is '+result)

})
var port=3000
app.listen(port)
console.log ('server listening on:' +port)