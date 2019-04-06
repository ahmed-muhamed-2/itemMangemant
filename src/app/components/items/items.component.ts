import { Item } from './../../models/item';
import { ItemService } from './../../service/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemservice: ItemService) { }

  ngOnInit() {
    this.itemservice.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item: Item) {
    this.clearState();
    this.itemservice.removeItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemservice.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
