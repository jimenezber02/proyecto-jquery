var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta emtanpada" + logo);
        };
    };
}
//@estampar("Louis Vuitton")
var Camiseta = /** @class */ (function () {
    function Camiseta(col, marc, prec) {
        this.color = col;
        this.marca = marc;
        this.precio = prec;
    }
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
var x = new Camiseta("rojo", "adidas", "15");
var Swetter = /** @class */ (function (_super) {
    __extends(Swetter, _super);
    function Swetter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Swetter.prototype.setTalla = function (v) {
        this.talla = v;
    };
    Swetter.prototype.getTalla = function () {
        return this.talla;
    };
    return Swetter;
}(Camiseta));
var xx = new Swetter("azul", "nike", "25");
xx.setTalla("MM");
//x.estampar();
//xx.estampacion();
console.log(x);
console.log(xx);
