import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-tooltip-demo',
  templateUrl: './np-tooltip-demo.component.html'
})
export class NpTooltipDemoComponent implements OnInit {

  importText = 'import { NpTooltipModule } from \'np-ui-lib\';';
  htmlText = `<span [np-tooltip]="\'This is left tooltip.\'" [placement]="\'left\'">
  Hover me for left tooltip
</span>`;
  contextText = `<span [np-tooltip]="tooltipTemp" [context]="{count: 5}">Hover me for top tooltip, with ng-template.
  <ng-template #tooltipTemp let-count="count">
    Count pass in context is {{count}}
  </ng-template>
</span>`;

  constructor() { }

  ngOnInit(): void {
  }


}
