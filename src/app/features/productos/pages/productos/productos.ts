import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  codigo: string;
  categoria: string;
  precioCompra: number;
  precioVenta: number;
  stock: number;
  estado: 'activo' | 'inactivo';
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  productos: Producto[] = [
    { id: 1, nombre: 'Laptop HP', codigo: 'PROD-001', categoria: 'Electrónica', precioCompra: 2800, precioVenta: 3500, stock: 15, estado: 'activo' },
    { id: 2, nombre: 'Monitor Dell', codigo: 'PROD-002', categoria: 'Electrónica', precioCompra: 450, precioVenta: 680, stock: 25, estado: 'activo' }
  ];

  searchTerm = '';
  showModal = false;
  editingProducto: Producto | null = null;

  formData: Producto = {
    id: 0,
    nombre: '',
    codigo: '',
    categoria: '',
    precioCompra: 0,
    precioVenta: 0,
    stock: 0,
    estado: 'activo'
  };

  get filteredProductos() {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.codigo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(producto?: Producto) {
    if (producto) {
      this.editingProducto = producto;
      this.formData = { ...producto };
    } else {
      this.editingProducto = null;
      this.formData = {
        id: 0,
        nombre: '',
        codigo: '',
        categoria: '',
        precioCompra: 0,
        precioVenta: 0,
        stock: 0,
        estado: 'activo'
      };
    }
    this.showModal = true;
  }

  save() {
    if (this.editingProducto) {
      this.productos = this.productos.map(p =>
        p.id === this.editingProducto!.id ? { ...this.formData } : p
      );
    } else {
      const newProducto = {
        ...this.formData,
        id: this.productos.length + 1
      };
      this.productos.push(newProducto);
    }
    this.showModal = false;
  }

  delete(id: number) {
    if (confirm('¿Eliminar producto?')) {
      this.productos = this.productos.filter(p => p.id !== id);
    }
  }

  calcularMargen(pc: number, pv: number) {
    if (pv === 0) return 0;
    return ((pv - pc) / pv) * 100;
  }
}