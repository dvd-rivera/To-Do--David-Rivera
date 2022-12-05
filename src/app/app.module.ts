import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	declarations: [AppComponent, TodoComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NoopAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		MatCheckboxModule,
		MatInputModule,
		MatFormFieldModule,
		MatTableModule,
	],
	exports: [MatCheckboxModule, MatInputModule, MatFormFieldModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
