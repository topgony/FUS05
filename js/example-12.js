$(document).ready(function(){
    // console.log('ok데스네');

    var menubar=$('.menubar,.btn-menubar');
    var menu=$('.menu');
    var bar=$('.menubar');
    var btn=$('.btn-menubar');

    menubar.on('click',function(){
        menu.toggleClass('menu-act');
        bar.toggleClass('menubar-act');
        if(menu.hasClass('menu-act')){
            btn.text('메뉴 닫기');
        }else{
            btn.text('메뉴 열기');
        }
    
    });

    


});