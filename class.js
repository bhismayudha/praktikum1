//CLASS
class persegipanjang{
    constructor(p, l){
        /** 
         * properti atau atribut dari sebuah objek
         * didefinisikan di dalam method
        */
       this.panjang = p
       this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}
let tanah = new persegipanjang(10,50)
console.log("Luas tanah = " + tanah.luas());
console.log("keliling tanah = " + tanah.keliling());