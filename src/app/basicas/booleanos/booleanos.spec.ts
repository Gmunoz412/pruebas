import { usuarioIngresado } from "./booleanos"

describe('Pruebas de booleano',()=>{

    it('Debe retornar ture', ()=>{
        const res = usuarioIngresado();

        expect(res).toBeTruthy();
    } )

})