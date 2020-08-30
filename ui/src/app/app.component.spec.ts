import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dataService: DataService;
  const currencyMock = [
    {
      "CcyAmt": {
        "Ccy": "EUR",
        "Amt": "1"
      },
      "Dt": "2020-08-30"
    },
    {
      "Dt": "2020-08-28",
      "CcyAmt": {
        "Ccy": "AUD",
        "Amt": "1.6216"
      }
    },
    {
      "Dt": "2020-08-28",
      "CcyAmt": {
        "Ccy": "BGN",
        "Amt": "1.9558"
      }
    },
    {
      "Dt": "2020-08-28",
      "CcyAmt": {
        "Ccy": "BRL",
        "Amt": "6.5608"
      }
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [DataService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    dataService = TestBed.get(DataService);
  })
  );

  it('should create AppComponent', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should have userId field 10 symbols', () => {
    appComponent.ngOnInit();
    expect((appComponent as any).userId.length).toBe(10);
  });

  it('should be called dataService getAllData() once', () => {
    const dataServiceSpy = spyOn(dataService, 'getAllData').and.returnValue(of(currencyMock));
    appComponent.ngOnInit();
    expect(dataServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should save currencies mock', () => {
    spyOn(dataService, 'getAllData').and.returnValue(of(currencyMock));
    appComponent.ngOnInit();
    expect(appComponent.currencies).toBe(currencyMock);
  });

  it('should be called dataService saveAllData() once', () => {
    spyOn(dataService, 'getAllData').and.returnValue(of(null));
    const dataServiceSpy = spyOn(dataService, 'saveAllData').and.returnValue(of(currencyMock));
    appComponent.ngOnInit();
    expect(dataServiceSpy).toHaveBeenCalledTimes(1);
  });
});
