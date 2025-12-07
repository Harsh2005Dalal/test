bod = document.querySelector('body');
bod.addEventListener('mousemove',function (params) {
    // console.log(params.y);
    document.documentElement.style.setProperty("--x", params.x + 'px');
    document.documentElement.style.setProperty("--y", params.y + 'px');
})

inc=document.querySelector('.inc');
dec=document.querySelector('.dec');
reveal = document.querySelector('.reveal');
hide = document.querySelector('.hide');

inc.addEventListener('click',function(){
    let radius = getComputedStyle(document.documentElement).getPropertyValue('--radius');
    let intRad = parseFloat(radius);
    if(intRad == 300)
    {
        return;
    }
    document.documentElement.style.setProperty("--radius",intRad + 50 + 'px' );
})

dec.addEventListener('click',function(){
    let radius = getComputedStyle(document.documentElement).getPropertyValue('--radius');
    let intRad = parseFloat(radius);
    if(intRad == 100)
    {
        return;
    }
    document.documentElement.style.setProperty("--radius",intRad - 50 + 'px' );
})

reveal.addEventListener('click',function(){
    document.documentElement.style.setProperty("--reveal", 0);
})

hide.addEventListener('click',function(){
    document.documentElement.style.setProperty("--reveal", 1);
})