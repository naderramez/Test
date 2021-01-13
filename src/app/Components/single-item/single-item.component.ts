import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() item:any;
  ngOnInit(): void { }

  navigateToItem() {
    this.router.navigate([`/items`, this.item.id])
  }

}
