$(document).ready(function (){
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        preloadImages: 'all'
        //slideWidth: 1200
    });

    info();

    $('.leermas').click(function (e){
        var id = $(this).data('id');
        fleermas(id);
    });

    cambia_tema();

    $('#boton-arriba button').click(function (e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },3000);
        return false;
    });

    $('#contacto').submit(function (e){
        var form = $('#contacto');
       localStorage.setItem('nombre',$('#nombre').val());
       localStorage.setItem('apellido',$('#apellido').val());
    });
    var usuario = localStorage.getItem('nombre');
    if((usuario!=null) && (usuario!=undefined)){
        var p = $('aside p');
        p.html('Bienvenido '+usuario);
        p.append('</br><a href="#" id="salir">Salir</a>');

        $('#sesion').hide();

        $('#salir').click(function (){
           localStorage.clear();
           location.reload();
           $('#sesion').show();
        });
    }

});

function fleermas(id){
    if(($('.parrafo'+id).css('display')) != 'inline'){
        $('.parrafo'+id).attr('style','text-align: justify');
        $('.parrafo'+id).css('display','inline');
        $('.leermas[data-id="'+id+'"]').html('Menos...');
    }else{
        $('.parrafo'+id).css('display','none');
        $('.leermas[data-id="'+id+'"]').html('Leer mas...');
    }
}

function info(){
    var fecha = new Date();
    var posts = [
        {
            title: 'Articulo 1',
            article: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n' +
                '            industry\'s standard dummy\n' +
                '            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n' +
                '            specimen book. It has\n' +
                '            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n' +
                '            unchanged. It was\n' +
                '            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n' +
                '            recently with desktop\n' +
                '            publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            Fecha: fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()
        },
        {
            title: 'Articulo 2',
            article: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n' +
                '            industry\'s standard dummy\n' +
                '            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n' +
                '            specimen book. It has\n' +
                '            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n' +
                '            unchanged. It was\n' +
                '            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n' +
                '            recently with desktop\n' +
                '            publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            Fecha: fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()
        },
        {
            title: 'Articulo 3',
            article: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n' +
                '            industry\'s standard dummy\n' +
                '            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n' +
                '            specimen book. It has\n' +
                '            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n' +
                '            unchanged. It was\n' +
                '            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n' +
                '            recently with desktop\n' +
                '            publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            Fecha: fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()
        },
    ];

    posts.forEach((item,index)=>{
        var post = `
            <article>
            <h1>${item.title}</h1>
            <span class="span">${item.Fecha}</span>
            <p>
                ${item.article}
            </p>
            <p id="parrafo${index+1}" class="parrafo${index+1}" style="display: none; line-height: 22px;">
                ${item.article}
            </p>
            <button class="leermas" data-id="${index+1}">Leer mas...</button>
            </article> `
        ;

        $('#articulos').append(post);
    });
}

function cambia_tema(){
    var vector_temas = ['green','modo_oscuro_xd','red','blue'];
    var tema_actual = $('#theme');

    var boton_temas = $('#temas div');
    boton_temas.each((index,item)=>{
       $(item).click(function (){
           tema_actual.attr('href','css/'+ vector_temas[index] + '.css');
       });
    });
}