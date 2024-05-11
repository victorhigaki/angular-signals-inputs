import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'input-antigo',
    standalone: true,
    imports: [
        FormsModule
    ],
    template: `
        <span>{{ label }}</span>

        <input type="text" 
            [(ngModel)]="valor" 
            (input)="valorChange.emit(valor)">

        <button 
            [disabled]="botaoDesativado"
            (click)="botaoClicado.emit('Antigo')">
            Clique Aqui
        </button>
    `
})
export class InputAntigoComponent implements OnChanges {

    @Input({ required: true }) label = '';

    @Input({
        transform: (valor: string | boolean) =>
            typeof valor === 'string' ? valor === '' || valor === 'true' : valor
    })
    botaoDesativado = true;

    @Output() botaoClicado = new EventEmitter<string>();

    // Two Way Data Bind
    @Input() valor = '';
    @Output() valorChange = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }
}