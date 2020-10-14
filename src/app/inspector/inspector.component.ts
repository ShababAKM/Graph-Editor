import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as go from 'gojs';
@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {
  @Input()
  public model : go.Model;
  ngOnInit() {
  }
  onSubmitNode(value: any) {
    this.model.startTransaction();
    this.model.addNodeData({ key: value.Node , color:'green'});
    this.model.commitTransaction();
  }
  onSubmitEdge(value: any) {
    this.model.startTransaction();
    (this.model as go.GraphLinksModel).addLinkData({ from: value.from, to: value.to, color: 'blue'});
    this.model.commitTransaction();
  }

}
