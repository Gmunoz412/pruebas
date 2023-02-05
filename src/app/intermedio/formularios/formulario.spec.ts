import { FormularioRegister } from "./formulario";
import { FormBuilder } from "@angular/forms";

describe('Formularios', ()=>{

    let componente: FormularioRegister;

    beforeEach(()=>{

        componente = new FormularioRegister( new FormBuilder());
    });

    it('Debe crear un fomrualrio con dos campos. Email y password ',()=>{

        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();

    });

    it('El email debe ser obligatorio',()=>{
        const control = componente.form.get('email');
        control?.setValue('')
        expect(control?.value).toBeFalsy();
    });

    it('El email debe ser valido',()=>{
        const control = componente.form.get('email');
        control?.setValue('asdadadada@gmail.com')
        expect(control?.valid).toBeTruthy();
    })

});