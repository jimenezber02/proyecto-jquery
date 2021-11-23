$(document).ready(function (){
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        preloadImages: 'all'
        //slideWidth: 1200
    });
    console.log("hola mundo");
    info();
    /*
    $('.leermas').click(function (e){
        var id = $(this).data('id');
        console.log(id);
       fleermas(id);
    });*/
});

function fleermas(id){
    if(($('.parrafo'+id).css('display')) != 'inline'){
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
    console.log(posts);
    posts.forEach((item,index)=>{
        var post = `
            <article>
            <h1>${item.title}</h1>
            <span className="span">${item.Fecha}</span>
            <p class="akskaksmk">
                ${item.article}
            </p>
            <p className="parrafo${index+1}" style="display: none">
                ${item.article}
            </p>
            <button className="leermas" onclick="fleermas(${index+1});" >Leer mas...</button>
            </article> `
        ;

        $('#articulos').append(post);
    });

}