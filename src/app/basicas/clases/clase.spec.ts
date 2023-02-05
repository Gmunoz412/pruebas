import { Jugador } from "./clase";

describe('Pruebas de clase',()=>{
    // const jugador  = new Jugador();
    let jugador  = new Jugador();

     beforeAll(()=>{
        // console.log('beforeAll')
     });
     beforeEach(()=>{

        // jugador.hp = 100;
        // console.log('beforeEach')
        jugador  =new Jugador
     });
     afterAll(()=>{
        // console.log('afterAll')
        
     });
     afterEach(()=>{
        // console.log('beforeEach')
        // jugador.hp = 100;

     });

    it('Debe retornar 80 hp si recibe 20 de dano',()=>{

        // const jugador  = new Jugador();

        const resp = jugador.recibeDano(20);

        expect(resp). toBe(80);
    });

    it('Debe retornar 50 hp si recibe 50 de dano',()=>{

        // const jugador  = new Jugador();

        const resp = jugador.recibeDano(50);

        expect(resp). toBe(50);
    });


    it('Debe retornar 0 hp si recibe 100 de dano o mas',()=>{

        // const jugador  = new Jugador();

        const resp = jugador.recibeDano(100);

        expect(resp). toBe(0);
    });



    
});