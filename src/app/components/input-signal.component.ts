import { Component, effect, input, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'input-signal',
    standalone: true,
    imports: [
        FormsModule
    ],
    template: `
        <span>{{label()}}</span>
        <input type="text" [(ngModel)]="valor" >
        <button [disabled]="botaoDesativado()" (click)="botaoClicado.emit('signal')">Click Aqui</button>
    `
})
export class InputSignalComponent {
    label = input.required<string>()
    botaoDesativado = input(false, {
        transform: (valor: string | boolean) => typeof valor === 'string' ? valor === '' || valor === 'true' : valor
    })

    botaoClicado = output<string>()

    valor = model('')

    constructor() {
        effect(() => console.log(this.valor()))
    }
} 