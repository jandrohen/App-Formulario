import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  comentarios: any[] = [
    {
      nombre: 'Alejandro Arguello',
      alias: '@Jandrohen',
      comentario: 'Vamos aprendiendo poco a poco',
    },
    {
      nombre: 'John Papa',
      alias: '@Elpapa',
      comentario: 'Acabaras dominandolo... tú puedes',
    },
  ];
  nombre: any;
  comentario: any;
  constructor() {}

  ngOnInit(): void {}
  agregarComentario() {
    console.log(this.nombre);
    console.log(this.comentario);

    let comentarioAux = {
      nombre: this.nombre,
      alias: `@ ${this.nombre}`,
      comentario: this.comentario,
    };

    this.comentarios.push(comentarioAux);
  }
  eliminar(indice: any) {
    this.comentarios.splice(indice, 1);
  }
}
