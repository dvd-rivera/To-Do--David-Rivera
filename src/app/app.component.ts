import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from './model/todo.interfase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	title = 'proyecto';

	tasks: Array<Todo> = [];

	displayedColumns: string[] = ['select', 'ID', 'Tarea', 'remove'];
	dataSource = new MatTableDataSource<Todo>(this.tasks);
	selection = new SelectionModel<Todo>(true, []);

	newTaskForm = this.fb.group({
		newTask: new FormControl(''),
	});

	tasksID = 0;

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	toggleAllRows() {
		if (this.isAllSelected()) {
			this.selection.clear();
			return;
		}

		this.selection.select(...this.dataSource.data);
	}

	checkboxLabel(row?: Todo): string {
		if (!row) {
			return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
		}
		return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
			row.id + 1
		}`;
	}

	addTask() {
		let task = this.newTaskForm.controls.newTask.value;
		if (task != null && task != undefined) {
			this.tasks.push({
				id: this.tasksID + 1,
				task: task,
				endDate: new Date(),
			});
			this.tasksID += 1;
		}
		this.dataSource.data = this.tasks;
	}

	removeTask(index: number) {
		let newTaskList = this.tasks.filter((task) => task.id != index);
		this.tasks = newTaskList;
		this.dataSource.data = newTaskList;
	}

	constructor(private fb: FormBuilder) {}
}
