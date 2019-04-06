import { Component, OnInit } from '@angular/core';
import { ItemService } from './../../service/item.service';
import { Item } from '../../models/item';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item = {
    title: '',
    description: ''
  };

  constructor(private itemservice: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.title !== '' && this.item.description !== '') {
      this.itemservice.addItem(this.item);
    }
  }

}
