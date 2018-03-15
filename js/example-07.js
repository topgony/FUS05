$(document).ready(function(){
    console.log('ㅎㅇ');
    var box1 = $('.box1');
    var btn=$('.btn');

    btn.on('click', function(){
        box1.toggleClass('box-act');
    });
});
