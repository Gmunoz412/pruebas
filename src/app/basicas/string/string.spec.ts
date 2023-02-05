
//agrupar priebas
// describe('Pruebas de strings');
// it('Debe de regresar un string');

import { mensaje } from "./string";


describe('Pruebas de strings', ()=>{

    it('Debe regresar un string',()=>{

       const resp = mensaje('Tavo');
       expect( typeof resp  ).toBe('string');
    });
    
    it('Debe regresar un saludo con el nombre enviado',()=>{

        const nombre = 'Tavo';

        const resp = mensaje(nombre);

        expect( resp  ).toContain(nombre);
     });
});

 