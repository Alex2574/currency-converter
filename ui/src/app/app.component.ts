import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  currencies: Object;

  currencyForm = new FormGroup({
    firstInput: new FormControl(),
    secondInput: new FormControl(),
    firstDropdown: new FormControl(),
    secondDropdown: new FormControl(),
  });

  private userId: string;
  private currencySide: boolean;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.userId = '_' + Math.random().toString(36).substr(2, 9);

    this.dataService.getAllData().pipe(
      switchMap((array: any[]) => {
        if (!array) {
          return this.dataService.saveAllData();
        }
        return of(array);
      })
    ).subscribe(response => {
      this.currencies = response;
    });

    this.currencyForm.get('firstInput').valueChanges.subscribe(firstInputValue => {
      this.currencySide = true;
    });

    this.currencyForm.get('secondInput').valueChanges.subscribe(secondInputValue => {
      this.currencySide = false;
    });

    this.currencyForm.valueChanges.subscribe(allForm => {
      const firstDropdownValue = this.currencyForm.get('firstDropdown').value;
      const secondDropdownValue = this.currencyForm.get('secondDropdown').value;
      if (this.currencySide) {
        const firstInputValue = this.currencyForm.get('firstInput').value;
        const result = this.calculate(firstInputValue, firstDropdownValue, secondDropdownValue);
        this.currencyForm.get('secondInput').patchValue(result, {
          onlySelf: true,
          emitEvent: false
        });

      } else {
        const secondInputValue = this.currencyForm.get('secondInput').value;
        const result = this.calculate(secondInputValue, secondDropdownValue, firstDropdownValue);
        this.currencyForm.get('firstInput').patchValue(result, {
          onlySelf: true,
          emitEvent: false
        });
      }
    });
  }

  private logging(firstInputValue, firstDropdownValue, secondDropdownValue, result) {
    const userInfo = {
      userId: this.userId,
      logInfo: `First input ${firstInputValue}, First Dropdown koef: ${firstDropdownValue}, Second Dropdown koef: ${secondDropdownValue}, Result: ${result}`
    };
    this.dataService.saveUserActivity(userInfo).subscribe(() => {
    }
    )
  }

  private calculate(firstInputValue, firstDropdownValue, secondDropdownValue) {
    let result = 0;
    if (firstInputValue && firstDropdownValue && secondDropdownValue) {
      result = (firstInputValue / firstDropdownValue) * secondDropdownValue
    }
    this.logging(firstInputValue, firstDropdownValue, secondDropdownValue, result);
    return result;
  }
}