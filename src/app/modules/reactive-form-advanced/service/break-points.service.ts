import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class BreakPointsService {

  private gridByBreakpoint = {
    [Breakpoints.XLarge]: 4,
    [Breakpoints.Large]: 4,
    [Breakpoints.Medium]: 4,
    [Breakpoints.Small]: 1,
    [Breakpoints.XSmall]: 1,
  };

  constructor(private breakpointObserver: BreakpointObserver) {}

  get breakPointObserver$(): Observable<number> {
    return this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              return this.gridByBreakpoint[query];
            }
          }
          return 1;
        })
      );
  }
}
