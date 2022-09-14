import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopList } from '@interceptors-examples/interface/top-list.interface';
import { paths } from '@interceptors-examples/interface/const';

@Component({
  selector: 'app-interceptors-examples',
  templateUrl: './interceptors-examples.component.html',
  styleUrls: ['./interceptors-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsExamplesComponent implements OnInit {
  topList: TopList[] = [];
  selected!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const list = Object.keys(paths);
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
