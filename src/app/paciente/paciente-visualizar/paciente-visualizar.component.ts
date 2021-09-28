import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Result } from '../paciente.service';

@Component({
  selector: 'app-paciente-visualizar',
  templateUrl: './paciente-visualizar.component.html',
  styleUrls: ['./paciente-visualizar.component.css'],
  providers: [MessageService]
})
export class PacienteVisualizarComponent implements OnInit {
  @Input()
  patient: Result | undefined;
  link = ""
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.link = this.getUrl();
  }

  getUrl() {
    return window.location.href
  }

  copyLink() {

    try {
      let listener = (e: any) => {
        e.clipboardData.setData('text/plain', (this.getUrl()));
        e.preventDefault();
      };
  
      document.addEventListener('copy', listener);
      document.execCommand('copy');
      document.removeEventListener('copy', listener);

      this.messageService.clear();
      this.messageService.add({severity:'success', summary:'Copiar', detail:'Link copiado!'})
    } catch (error) {
      
    }

  }

}
