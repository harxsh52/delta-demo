const express=require('express');
const app=express();
const figlet=require('figlet');
app.get('/',(req,res)=>{
    figlet('Jagriti',(err,data)=>{
        if(err){
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.send(data);
    });
});
app.get('/about',(req,res)=>{
    res.send('This is a simple about page');
}
);
app.get('*',(req,res)=>{
    res.send('This is a simples about page');
}
);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);