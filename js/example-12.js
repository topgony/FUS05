$(document).ready(function(){
    // console.log('ok데스네');

    var menubar=$('.menubar,.btn-menubar');
    var menu=$('.menu');
    
    menubar.on('click',function(){
        menu.toggleClass('menu-act');
    });
    
});