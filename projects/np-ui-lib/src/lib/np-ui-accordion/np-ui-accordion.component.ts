import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, QueryList, AfterContentInit, EventEmitter, Input } from '@angular/core';
import { NpUiPanelComponent } from '../np-ui-panel/np-ui-panel.component';

@Component({
  selector: 'np-ui-accordion',
  templateUrl: './np-ui-accordion.component.html',
  styleUrls: ['./np-ui-accordion.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpUiAccordionComponent implements AfterContentInit {

  @ContentChildren(NpUiPanelComponent) _panels: QueryList<NpUiPanelComponent>;

  @Input() defaultOpenIndex: number;
  @Input() styleClass: string;

  constructor() { }

  ngAfterContentInit(): void {
    this._panels.toArray().forEach(panel => {
      panel._isMinimize = true;
      panel.allowToMinimize = true;
      panel.allowToClose = false;
      panel.allowToZoom = false;
      panel._onOpen.subscribe((_p: NpUiPanelComponent) => {
        this._onOpenPanel(_p);
      });
    });
    if (this.defaultOpenIndex != undefined && this.defaultOpenIndex != null && this.defaultOpenIndex >= 0) {
      this.expandByIndex(this.defaultOpenIndex);
    }
  }

  _onOpenPanel(panel: NpUiPanelComponent) {
    panel._isMinimize = false;
    this._panels.toArray().forEach(_p => {
      if (_p.id != panel.id) {
        _p._isMinimize = true;
      }
    });
  }

  expandByIndex(idx: number) {
    var panel = this._panels.toArray()[idx];
    this._onOpenPanel(panel);
  }

  expandById(id: string) {
    var panel = this._panels.find(function (item) { if (item.id === id) { return true; } });
    this._onOpenPanel(panel);
  }

}