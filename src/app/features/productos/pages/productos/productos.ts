import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE


@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos: any[] = [];

getProductos() {
  console.log('cargar productos');
}

activar(id: number) {
  console.log('activar', id);
}

desactivar(id: number) {
  console.log('desactivar', id);
}
}
