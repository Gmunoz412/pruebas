import { IncrementadorComponent } from "./incrementador.component"
describe('Incrementador component Unit',()=>{


    let component: IncrementadorComponent;

    beforeEach(()=>component = new IncrementadorComponent());
    it('No debe de pasar de 100 el rpogreso',()=>{

        component.progreso = 50;
        component.cambiarValor(5);
        expect(component.progreso).toBe(55);

    })
})