import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() size: number = 12;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  dec() {
    this.resize(+this.size - 1);
  }

  inc() {
    this.resize(+this.size + 1)
  }
  
  resize(size: number) {
    this.sizeChange.emit(size)
  }

}
