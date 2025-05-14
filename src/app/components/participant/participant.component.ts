import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Participant } from '../../types/participant';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules( [AllCommunityModule]);
@Component({
  selector: 'app-participant',
  imports: [AgGridAngular],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})



export class ParticipantComponent implements OnInit {
  rowData: Participant[]=[];
  constructor(public participants: Participant) {
    }
  ngOnInit():void {
    this.rowData = this.participants.getParticipants(); }
  
// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef[] = [
  { field: "firstName" },
  { field: "lastName" },
  { field: "phone" },
    { field: "email" },
    { field: "price" },
    { field: "isPaid" },
    { field: "lessonNumber" }
];
}
