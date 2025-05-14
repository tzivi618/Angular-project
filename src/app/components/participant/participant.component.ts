import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { Participant } from '../../types/participant';
import { ParticipantService } from '../../servises/participant.service';
import { filter } from 'rxjs';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { localeTextHE } from '../../types/localeTextHE';
ModuleRegistry.registerModules([AllCommunityModule]);


@Component({
  selector: 'app-participant',
  imports: [AgGridAngular, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
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
  openDialog(params: any): void {
    this.dialog.open(LessonDetailsComponent);
  }
  colDefs: ColDef[] = [
    { field: "firstName", headerName: "שם פרטי", filter: "agTextColumnFilter" },
    { field: "lastName", headerName: "שם משפחה", filter: "agTextColumnFilter" },
    { field: "phone", headerName: "טלפון", filter: "agTextColumnFilter" },
    {
      field: "lessonNumber", headerName: "מספר שיעור", filter: "number",
      cellRenderer: (params: any) => { return 'פרטי השיעור' }, 
      // onCellClicked: (params: any) => {
      //   alert("פרטי השיעור");
      //   this. dialog = inject(MatDialog);
      //   this. dialog.open(LessonDetailsComponent);}
    
      onCellClicked: (params: any) => this.openDialog(params)
  } 
  ,
{ field: "price", headerName: "מחיר", filter: "number" },
{ field: "isPaid", headerName: "שולם", "filter": "agSetColumnFilter" },
{ field: "email", headerName: "אימייל", filter: "agTextColumnFilter" },
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

