import { Component,Input, OnInit } from '@angular/core';
import { ANY_STATE } from '@angular/core/src/animation/animation_constants';
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
  link: Array<{ from: string, to: number }> = []; 
  nodeList:Array<string>=[];
  onSubmitNode(value: any) {
    if (Number(value.Node) <= 50 && Number(value.Node)>0)
    {
      this.model.startTransaction();
      if ((this.model as go.GraphLinksModel).findNodeDataForKey(value.Node) == null) {
        this.model.addNodeData({ key: value.Node, color: 'green' });
        this.nodeList.push(value.Node);
        console.log(this.nodeList);
      }
      this.model.commitTransaction();
    }

  }
  flag:boolean=false;
  onSubmitEdge(value: any) {
    if(value.from!=value.to){
    this.flag=false;
    for (var i = 0; i < this.link.length; i++) {
      if(this.link[i]==value)
      {this.flag=true;}
    }
    if(this.flag==false)
    { 
      this.link.push(value);
      this.model.startTransaction();
      (this.model as go.GraphLinksModel).addLinkData({ from: value.from, to: value.to, color: 'blue' });
      this.model.commitTransaction();

    }
  }
  }
  isDisplay=false;
  toggleDisplay(){
    //this.isDisplay = !this.isDisplay;
    this.model.commit(function (m) {
      // alternate between lightblue and lightgreen colors
      var oldstroke = m.modelData.toggle;
      var newstroke = (oldstroke === "green" ? "black" : "green");
      m.set(m.modelData, "toggle", newstroke);
    });
  }
}
//console.log();
