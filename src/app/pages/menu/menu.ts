import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  name: string;
  value: number;
  selected: boolean;
  type: string;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})

export class MenuComponent {

  currentType = 'тип 1';

  menuItems: MenuItem[] = [
    { name: 'Пункт 1', value: 10, selected: false, type: 'тип 1' },
    { name: 'Пункт 2', value: 20, selected: false, type: 'тип 1' },
    { name: 'Пункт 3', value: 30, selected: false, type: 'тип 2' },
    { name: 'Пункт 4', value: 40, selected: false, type: 'тип 2' }

  ];

  get filteredItems() {
    return this.menuItems.filter(item => item.type === this.currentType);
  }

  get selectedItems() {
    return this.menuItems.filter(item => item.selected);
  }

  get totalValue(){
    return this.selectedItems.reduce((sum, item) => sum += item.value, 0)
  }

}

