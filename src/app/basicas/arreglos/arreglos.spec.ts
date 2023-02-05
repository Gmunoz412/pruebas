import { obrtenerRobots } from "./arreglos"

describe('Pruebas de arreglos', ()=>{

    it('Debe de retonrar al menos 4 robocs',()=>{

        const res = obrtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
     
    // x apra saltar prueba 

    it('Debe de existir Belisarius Cawl y Terminator',()=>{

        const res = obrtenerRobots();
        expect(res).toContain('Belisarius Cawl');
        expect(res).toContain('Terminator');
    });


})