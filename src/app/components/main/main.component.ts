import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterContentInit {

  animationSources: Record<string, string> = {};
  animationStages: Record<string, number> = {};

  init: boolean = false;

  constructor() {
    this.init = false;
  }
 
  ngOnInit() {
  }

  ngAfterContentInit() {
    this.playAnimation("MILL", "assets/haypi-images/mill_back_$FRAME$_2x.png", 30, 35);
    this.playAnimation("FLAG", "assets/haypi-images/ty_back_$FRAME$_2x.png", 23, 60);
    this.playAnimation("EAGLE", "assets/haypi-images/eagle_back_$FRAME$_2x.png", 30, 35);
    this.playAnimation("EAGLE_SHADOW", "assets/haypi-images/s_eagle_back_$FRAME$_2x.png", 30, 35);
    this.init = true;
  }

  playAnimation(name: string, source: string, frames: number, ms: number) {

    if (this.animationStages[name] == undefined) this.animationStages[name] = 1;

    if (this.animationStages[name] >= frames) {
      this.animationStages[name] = 1;
    } else {
      this.animationStages[name]++;
    }

    var text: string = "";
    if (this.animationStages[name] <= 9) {
      text = `0${this.animationStages[name]}`;
    } else {
      text = `${this.animationStages[name]}`;
    }

    setTimeout(() => this.playAnimation(name, source, frames, ms), ms);
    this.animationSources[name] = source.replace('$FRAME$', text);
  }

}
