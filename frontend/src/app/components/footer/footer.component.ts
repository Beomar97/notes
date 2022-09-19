import { Component, OnInit } from '@angular/core';
import angular from '@iconify/icons-logos/angular-icon';
import kotlin from '@iconify/icons-logos/kotlin-icon';
import spring from '@iconify/icons-logos/spring-icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  angularIcon = angular;
  kotlinIcon = kotlin;
  springIcon = spring;

  constructor() {}

  ngOnInit(): void {}
}
