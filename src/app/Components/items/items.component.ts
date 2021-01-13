import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {

  constructor(private myService: ApiService, private myRouter: Router) { }
  ngOnDestroy(): void {
    // this.subscriber.unsubscribe()
  }
  subscriber;
  items: any;

  addId;
  addSource;
  addType;
  addSize;
  addColor;

  addItem() {
    let item = {
      id: this.addId,
      type: this.addType,
      size: this.addSize,
      color: this.addColor,
      src: this.addSource
    }
    this.myService.addNewItem(item).subscribe();
    this.myRouter.navigate([`./items/${item.id}`]);
  }
  ngOnInit(): void {
    console.log(this.myService.getAllItems());

    this.subscriber = this.myService.getAllItems()
    .subscribe(
      (res) => {
        this.items = res.body;

      },
      (err) => {
        console.log(err);

      }
    )
  }

}
