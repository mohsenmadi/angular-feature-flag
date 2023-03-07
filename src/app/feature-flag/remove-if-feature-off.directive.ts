import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FeatureFlagService} from "./feature-flag.service";

@Directive({
  selector: '[removeIfFeatureOff]'
})
export class RemoveIfFeatureOffDirective implements OnInit {

  @Input('removeIfFeatureOff') featureName = '';

  constructor(private el: ElementRef, private ffs: FeatureFlagService) {
  }

  ngOnInit(): void {
    if (!this.ffs.isFeatureOn(this.featureName)) {
      const elm = this.el.nativeElement;
      elm.parentNode.removeChild(elm);
      console.log('== removed', elm)
    }
  }
}
