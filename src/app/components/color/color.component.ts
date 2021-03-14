import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[] = [];
  currentColor:Color = {id:-1,colorName:""}
  dataLoaded = false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors() {
    this.colorService.getColors().subscribe(response => {
       this.colors = response.data,
       this.dataLoaded = true;
    })
  }
  setCurrentColor(color:Color){
    this.currentColor = color;
  }
  getCurrentColorClass(color:Color){
    if(this.currentColor == color){
      return "list-group-item active";
    } else {
      return "list-group-item"
    }
  }
  getAllCurrentColorClass(){
    let defaultColor:Color = {id:-1,colorName:""};
    if(this.currentColor.id == defaultColor.id){
      return "list-group-item active";
    } else {
      return "list-group-item"
    }
  }
  removeCurrentColor(){
    this.currentColor={id:-1,colorName:""};
  }
}
