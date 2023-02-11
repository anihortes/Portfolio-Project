import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input()month!: string;
  @Input() day!: number;
  @Input() year: number = 2023;
  
  public getDayOfTheWeek(day: number, month: string, year: number): string{ 
    // algorithm or code you find
    window.location.hash = day.toLocaleString();
    window.location.hash = year.toLocaleString();
    const temp = new Date(month + " " + day +", " + year)
    let dayOfWeekNum = temp.getDay();
    
    switch(dayOfWeekNum){
      case 0:
        return 'sunday';
      
      case 1:
        return 'monday';

      case 2:
        return 'tuesday';

      case 3:
        return 'wednesday';

      case 4:
        return 'thursday';

      case 5:
        return 'friday';

      case 6:
        return 'saturday';
    }
    return 'sunday' //safety net return 
  } 
}

