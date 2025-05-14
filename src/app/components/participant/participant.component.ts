import { Component, OnInit } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { Participant } from '../../types/participant';
import { ParticipantService } from '../../servises/participant.service';
import { localeTextHE } from '../../types/localeTextHE';
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
  paginationAutoPageSize = true;
  gridOptions = {
    enableRtl: true,
    localeText: localeTextHE

  }
  ngOnInit(): void {
    this.rowData = this.participantService.getParticipants();
  }
  colDefs: ColDef[] = [
    { field: "firstName", headerName: "שם פרטי", filter: 'agTextColumnFilter' },
    { field: "lastName", headerName: "שם משפחה", filter: 'agTextColumnFilter' },
    { field: "phone", headerName: "טלפון", filter: 'agTextColumnFilter' },
    {
      field: "lessonNumber", headerName: "מספר שיעור", filter: 'agTextColumnFilter',
      cellRenderer: (params: any) => {
        return 'לחץ לפרטי שיעור ' + params.value;
      },
      onCellClicked: (event: any) => {
        alert(`Clicked on lesson number: ${event.value}`);
      }
    },
    { field: "price", headerName: "מחיר", filter: 'agNumberColumnFilter' },
    { field: "isPaid", headerName: "שולם", filter: 'agbooleanColumnFilter' },
    { field: "email", headerName: "אימייל", filter: 'agTextColumnFilter' },
  ];




}