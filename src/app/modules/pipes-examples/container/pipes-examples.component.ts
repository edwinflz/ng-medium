import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopList } from '@interceptors-examples/interface/top-list.interface';
import { pipePaths } from '@pipes-examples/const';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipesExamplesComponent implements OnInit {

  topList: TopList[] = [];
  selected!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const list = Object.keys(pipePaths);
    for (let i = list.length; i > 0; i--) {
      const path = list[i - 1];
      let newItem: TopList = { path, position: i };
      this.topList.push(newItem);
    }
  }

  nagivate(item: TopList): void {
    this.selected = item.position;
    this.router.navigate([item.path], {
      relativeTo: this.activatedRoute,
    });
  }

}
