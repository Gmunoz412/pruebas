import { Jugador2 } from './jugador2';

describe('Pruebas de Jugador 2 emit', ()=>{
    let jugador: Jugador2;

    beforeEach(()=> jugador = new Jugador2() );


    it ('Debe emitir un evento uadno se recibe dano',()=>{

        let nuevoHP=0;
        jugador.hpCambia.subscribe(hp =>{
            nuevoHP = hp;

        });
        jugador.recibeDano(1000);
        expect(nuevoHP).toBe(0);
    });

    it ('Debe emitir un evento uadno se recibe dano y sobrevivir sie s menor a 100',()=>{

        let nuevoHP=0;
        jugador.hpCambia.subscribe(hp =>nuevoHP = hp);
        jugador.recibeDano(50);
        expect(nuevoHP).toBe(50);
    });

});