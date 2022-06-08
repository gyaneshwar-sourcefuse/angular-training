import { Component, Inject, inject, OnInit } from '@angular/core';
import { USE_FAKE } from 'src/app/app.module';
import { AnotherService } from 'src/app/services/another.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.scss'],
})
export class DirectivesExampleComponent implements OnInit {
  isSpecial: boolean = false;
  canSave: boolean = false;
  isUnchanged: boolean = false;
  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};
  name: string = '';
  showText: boolean = false;
  items: any[] = [
    {
      id: '1',
      name: 'Sama',
    },
    {
      id: '2',
      name: 'Gyani',
    },
  ];
  switchCase: string = '1';

  constructor(
    
  ) {
    
  }

  ngOnInit(): void {}

  setCurrentClasses() {
    this.currentClasses = {
      saveable: !this.canSave,
      modified: !this.isUnchanged,
      special: !this.isSpecial,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': !this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': !this.isSpecial ? '24px' : '12px',
    };
  }

  trackByItems(item: any) {
    return item.id;
  }
}
