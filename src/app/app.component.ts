import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import * as Prism from 'prismjs';

const batch = 20 as const;
const elementHeight = 60 as const;
const startHeight = 80 as const;

const startIndex = 2 as const;
const count = 100;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'even-odd-code';

  start = 'function isEven(n) {\n\tif (n == 1) {\n\t\treturn false;\n\t}';
  html: string[] = [];

  lastIndex = 0;
  firstIndex = startIndex;

  updatingScroll = false;
  firstEvent = true;

  ngOnInit() {
    this.start = Prism.highlight(
      this.start,
      Prism.languages['javascript'],
      'javascript'
    );
    for (let i = this.firstIndex; i <= count; i++) {
      this.html.push(this.getCode(i));
      this.lastIndex = i;
    }
  }

  onScroll(event: Event) {
    const element = event.target as Element;
    const height = element.scrollHeight;
    const clientHeight = element.clientHeight;

    if (this.firstEvent === true) {
      element.scrollTo(0, 0);
      this.firstEvent = false;
      return;
    }

    if (element.scrollTop === height - clientHeight) {
      // Remove first batch # of elements
      this.html.splice(0, batch);
      this.firstIndex += batch;

      // Add next batch # of elements
      for (let i = this.lastIndex + 1; i <= this.lastIndex + batch; i++) {
        this.html.push(this.getCode(i));
      }
      this.lastIndex += batch;

      // Update scroll position so user doesn't realize they have moved
      setTimeout(() => {
        element.scrollTop = height - clientHeight - batch * elementHeight;
      });
    } else if (
      element.scrollTop < startHeight &&
      this.firstIndex > startIndex &&
      this.updatingScroll === false
    ) {
      // Lock this method to prevent duplicate events
      this.updatingScroll = true;

      // Remove last batch # of elements
      this.html.splice(this.html.length - (batch + 1), batch);
      this.firstIndex -= batch;
      this.lastIndex -= batch;

      // Add first batch # of elements
      for (let i = this.firstIndex + batch - 1; i >= this.firstIndex; i--) {
        this.html.splice(0, 0, this.getCode(i));
      }

      // Update scroll position so user doesn't realize they have moved
      setTimeout(() => {
        element.scrollTop = element.scrollTop + batch * elementHeight;
        this.updatingScroll = false;
      });
    }
  }

  getCode(n: number): string {
    return Prism.highlight(
      this.getIfStatement(n),
      Prism.languages['javascript'],
      'javascript'
    );
  }

  getIfStatement(n: number): string {
    return `\telse if (n == ${n}) {\n\t\treturn ${n % 2 == 0};\n\t}`;
  }
}
