import { Component, Input, OnInit } from '@angular/core';
import * as go from 'gojs';
const $ = go.GraphObject.make;
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  public diagram : go.Diagram = null;
  @Input()
  public model: go.Model;
  constructor() { }

  ngOnInit() {
  }
  public ngAfterViewInit() {
    this.diagram = $(go.Diagram, 'myDiagramDiv');
    
    this.diagram.nodeTemplate =
      $(go.Node, "Auto",
        $(go.Shape, "Circle", { stroke:"black",strokeWidth: 2.5, fill: "white" },
          new go.Binding("fill", "color")),
        $(go.TextBlock,
          { margin: 8, font: "bold 14px sans-serif", stroke: '#333' },
          new go.Binding("text", "key"))
      );
    this.diagram.linkTemplate =
      $(go.Link,
        { toShortLength: 3, relinkableFrom: false, relinkableTo: false },
        $(go.Shape,
          { strokeWidth: 2 },
          new go.Binding("stroke", "color")),
        $(go.Shape,
          { toArrow: "Standard", stroke: null })
      );
    this.diagram.model = this.model;
  }

}
