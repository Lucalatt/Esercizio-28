var vestiti : Abbigliamento[];

class Abbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(_id: number, _codprod: number, _collezione: string, _capo: string, _modello: number, _quantita: number, _colore: string, _prezzoivainclusa: number, _prezzoivaesclusa: number, _disponibile: string, _saldo:number) {

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

    getSaldoCapo(): number {
        return (this.prezzoivainclusa * this.saldo) / 100;
    }

    getAcquistoCapo(): number {
        return this.prezzoivainclusa-this.getSaldoCapo();
    }
}

function getDati(): void {
    fetch('http://localhost:3000/capi').then((response) => {
        return response.json();
    }).then((data) => {
        vestiti = data;
        vestiti.map(function(e) {
            let capo = new Abbigliamento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            console.log(capo);
            console.log('Totale capo:' + capo.getAcquistoCapo() + ' €');
        });
        console.log(vestiti);
    });
}

getDati();