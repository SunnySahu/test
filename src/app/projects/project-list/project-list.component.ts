import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import {Project} from '../project';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

projects:Project[]=[
new Project('sample','sample', 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'),
new Project('Sample2','Sample2', 'http://ideasuccessnetwork.com/wp-content/uploads/2013/07/hand-drawing-on-paper-new-idea_fkrV_5rd.jpg')
];
@Output() projectSelected= new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }
onSelected(project: Project){
this.projectSelected.emit(project);

}
}
