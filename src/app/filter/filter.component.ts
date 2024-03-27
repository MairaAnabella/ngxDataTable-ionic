import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    <input
      type="text"
      style="padding: 8px; margin: 15px auto; width: 30%;"
      placeholder="Type to filter the name column..."
      (keyup)="emitFilterChange($event)"
    />
  `,
})
export class FilterComponent {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  emitFilterChange(event: Event,) {
    const inputElement = event.target as HTMLInputElement; // Casting event.target to HTMLInputElement

    if (inputElement) {
      const filterValue = inputElement.value;
      //console.log(filterValue)
      this.filterChange.emit(filterValue);
    }
  }
}
