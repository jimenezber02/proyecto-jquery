$(document).ready(function (){

    info();
    $('#acordeon').accordion();

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

    $('#submit').click(function (e){
        console.log('btn envuar');
        var form = $('#contacto');
        /*$.validate({
            lang:'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });*/
        form.validate({
            rules:{
                nombre:{
                    required: true
                },
                apellido:{
                    required: true
                },
                password:{
                    required: true
                }
            },
            messages:{
                nombre:{
                    required: "Nombre no válido"
                },
                apellido:{
                    required: "Apellido no válido"
                },
                password:{
                    required: "Contraseña no válido"
                }
            }
        });
        if(form.valid()){
            console.log('valido');
            //localStorage.setItem('nombre',$('#nombre').val());
            //localStorage.setItem('apellido',$('#apellido').val());
        }else{
            console.log('invalido');
        }
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
            Fecha: fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()
        },
    ];

    $('#acordeon').accordion();
    var data = $('.about .articulos');

    //posts[0].article = data.html();

    console.log(posts);
    posts.forEach((item,index)=>{
        var post = `
            <article>
            <h1>${item.title}</h1>
            <span class="span">${item.Fecha}</span>
            <div id="acordeon">
                <h3>Quienes somos</h3>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy
                    </p>
                </div>
                <h3>Dirección</h3>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy
                    </p>
                </div>
                <h3>Formaci&oacute;n</h3>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy
                    </p>
                </div>
                <h3>Tecnolog&iacute;as</h3>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy
                    </p>
                </div>
            </div>
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