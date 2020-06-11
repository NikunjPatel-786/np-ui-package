import { Component, OnInit, ViewChild } from '@angular/core';
import { NpListComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-list-demo',
  templateUrl: './np-list-demo.component.html',
  styleUrls: ['./np-list-demo.component.css']
})
export class NpListDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("list2", { static: true }) list2: NpListComponent;

  items: any[] = [
    { id: 1, name: "Maria", age: 28 },
    { id: 2, name: "Karl", age: 6 },
    { id: 3, name: "Jose", age: 41 },
    { id: 4, name: "Yoshi", age: 8 },
    { id: 5, name: "Jonas", age: 9 },
    { id: 6, name: "Hari", age: 18 },
    { id: 7, name: "Karl", age: 33 },
    { id: 8, name: "Daniel", age: 18 },
    { id: 9, name: "Yvonne", age: 27 },
    { id: 10, name: "John", age: 26 },
    { id: 11, name: "Mario", age: 53 },
    { id: 12, name: "Martine", age: 65 },
    { id: 13, name: "Jean", age: 12 },
    { id: 14, name: "Marie", age: 46 },
    { id: 15, name: "Paula", age: 60 },
    { id: 16, name: "Paul", age: 69 },
    { id: 17, name: "Frédérique", age: 34 },
    { id: 18, name: "Aria", age: 64 },
    { id: 19, name: "Pedro", age: 31 },
    { id: 20, name: "Janete", age: 36 },
  ];

  getSelectedItems() {
    alert(JSON.stringify(this.list2.getSelectedItems()));
  }

  setSelectedItems() {
    this.list2.setSelectedItems([
      { id: 1, name: "Maria", age: 28 },
      { id: 2, name: "Karl", age: 6 },
      { id: 3, name: "Jose", age: 41 }]);
  }

  clear() {
    this.list2.clear();
  }

  selectAll() {
    this.list2.selectAll();
  }

  selectItem() {
    this.list2.selectItem({ id: 1, name: "Maria", age: 28 });
  }

  selectItemByIndex() {
    this.list2.selectItemByIndex(0);
  }

  deselectItem() {
    this.list2.deselectItem({ id: 1, name: "Maria", age: 28 });
  }

  deselectItemByIndex() {
    this.list2.deselectItemByIndex(0);
  }
}