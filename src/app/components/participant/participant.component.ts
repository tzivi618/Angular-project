import { Component, OnInit } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { Participant } from '../../types/participant';
import { ParticipantService } from '../../servises/participant.service';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-participant',
  imports: [AgGridAngular],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css',
  standalone: true
})
export class ParticipantComponent implements OnInit {
  rowData: Participant[] = [];
  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.rowData = this.participantService.getParticipants();
  }
  colDefs: ColDef[] = [
    { field: "firstName", headerName: "שם פרטי" },
    { field: "lastName", headerName: "שם משפחה" },
    { field: "phone", headerName: "טלפון" },
    { field: "lessonNumber", headerName: "מספר שיעור" },
    { field: "price", headerName: "מחיר" },
    { field: "isPaid", headerName: "שולם" },
    { field: "email", headerName: "אימייל" }
  ];


}