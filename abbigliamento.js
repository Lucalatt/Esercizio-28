"use strict";
var vestiti;
class Abbigliamento {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivainclusa, _prezzoivaesclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getSaldoCapo() {
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
function getDati() {
    fetch('http://localhost:3000/capi').then((response) => {
        return response.json();
    }).then((data) => {
        vestiti = data;
        vestiti.map(function (e) {
            let capo = new Abbigliamento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            console.log(capo);
            console.log('Totale capo:' + capo.getAcquistoCapo() + ' €');
        });
        console.log(vestiti);
    });
}
getDati();
