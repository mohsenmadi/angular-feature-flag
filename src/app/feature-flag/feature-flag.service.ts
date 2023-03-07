import { Injectable } from '@angular/core';
import flagsmith from 'flagsmith';

flagsmith.init({
  environmentID: "dffVJfHm9UxC6afKz9CPdn",
  cacheFlags: true,
  enableAnalytics: true
})

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  isFeatureOn(featureName: string) {
    return flagsmith.hasFeature(featureName);
  }
}
