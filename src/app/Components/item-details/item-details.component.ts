import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  constructor(private myService: ApiService, private activatedRoute: ActivatedRoute) { }
  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
  }

  subscriber;
  item;
  id = this.activatedRoute.snapshot.params['id'];
  ngOnInit(): void {
    this.myService.getItemById(this.id)
    .subscribe(
      (res) => {
        this.item = res;
      },
      (err) => {console.log(err)}
    )
  }

}
