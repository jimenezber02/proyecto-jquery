//Decorador
function estampar(logo:string){
    return function(target: Function){
       target.prototype.estampacion = function():void{
            console.log("Camiseta emtanpada"+logo);
       } 
    }
}
//@estampar("Louis Vuitton")
class Camiseta{
    private color: string;
    private marca: string;
    private precio: number;

    constructor(col,marc,prec){
        this.color = col;
        this.marca = marc;
        this.precio = prec;
    }

    public getMarca() : string {
        return this.marca;
    }

    public getColor() : string {
        return this.color;
    }

    public getPrecio() : number {
        return this.precio;
    }
}
var x = new Camiseta("rojo","adidas","15");

class Swetter extends Camiseta{
    private talla: string;

    public setTalla(v : string) {
        this.talla = v;
    }
    

    public getTalla() : string {
        return this.talla;
    }
    
}
var xx = new Swetter("azul","nike","25");
xx.setTalla("MM");
//x.estampar();
//xx.estampacion();
console.log(x);
console.log(xx);