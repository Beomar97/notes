import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteId',
})
export class NoteIdPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (value) {
      return value.split('-')[0];
    }

    return '';
  }
}
