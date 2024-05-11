import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputAntigoComponent } from './components/input-antigo.component';
import { InputSignalComponent } from './components/input-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputAntigoComponent, InputSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-signals-inputs';

  inputAntigoLabel = 'input Antigo Label'
  inputSignalLabel = signal('Meu Nome');

  valorInputAntigo = 'Criss';
  valorInputSignal = 'Signal';

  imprimirValor(valor: string) {
    console.log({ valor })
  }
}
