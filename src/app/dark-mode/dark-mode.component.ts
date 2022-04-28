import { Component, OnInit, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Mode = 'dark-mode' | 'light-mode';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {
  mode: Mode = 'dark-mode';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.init();
  }

  init = (): void => this.renderer.addClass(this.document.body, this.mode);

  toggle_mode() {
    this.document.body.classList.replace(
      this.mode,
      this.mode === 'dark-mode' ? (this.mode = 'light-mode') : (this.mode = 'dark-mode')
    );
  }
}
