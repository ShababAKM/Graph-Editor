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
      $(go.Node, "Auto",  // the Shape will go around the TextBlock
        $(go.Shape, "Circle", { stroke:"black",strokeWidth: 2.5, fill: "white" },
          // Shape.fill is bound to Node.data.color
          new go.Binding("fill", "color")),
        $(go.TextBlock,
          { margin: 8, font: "bold 14px sans-serif", stroke: '#333' }, // Specify a margin to add some room around the text
          // TextBlock.text is bound to Node.data.key
          new go.Binding("text", "key"))
      );
    this.diagram.linkTemplate =
      $(go.Link,
        { toShortLength: 3, relinkableFrom: true, relinkableTo: true },  // allow the user to relink existing links
        $(go.Shape,
          { strokeWidth: 2 },
          new go.Binding("stroke", "color")),
        $(go.Shape,
          { toArrow: "Standard", stroke: null })
          
      );
    this.diagram.model = this.model;
  }

}
