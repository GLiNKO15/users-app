import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
	MatDialog,
	MAT_DIALOG_DATA,
	MatDialogRef,
	MatDialogTitle,
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
  } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { typeMaterial } from 'libs/users/materials/data-access/src/lib/folders-materials-types/folders-materials-types';

@Component({
	selector: 'material-delete',
	templateUrl: './delete-material-dialog.component.html',
	standalone: true,
	imports: [ CommonModule ],
})
export class MaterialsDeleteDialogComponent{
	dialog = inject( MatDialog );
	dialogRef = inject(MatDialogRef<MaterialsDeleteDialogComponent>)
	dialogData: { material: typeMaterial } = inject( MAT_DIALOG_DATA );
	
	closeDialog(id?: number): void {
		this.dialogRef.close(id);
	}
}