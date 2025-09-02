import { Breakpoints } from '@angular/cdk/layout';

const breakpointsToObserve = [
  Breakpoints.Web,
  Breakpoints.WebLandscape,
  Breakpoints.WebPortrait,
  Breakpoints.Tablet,
  Breakpoints.TabletPortrait,
  Breakpoints.XSmall,
  Breakpoints.TabletLandscape,
  Breakpoints.Handset,
  Breakpoints.HandsetLandscape,
  Breakpoints.HandsetPortrait,
  Breakpoints.Small,
  Breakpoints.Medium,
  Breakpoints.Large,
  Breakpoints.XLarge,
];

const testBreakpoints = (breakpointMatches: any) => {
  if (breakpointMatches[Breakpoints.Web]) {
    console.log('Web ' + Breakpoints.Web);
  }

  if (breakpointMatches[Breakpoints.WebLandscape]) {
    console.log('WebLandscape ' + Breakpoints.WebLandscape);
  }

  if (breakpointMatches[Breakpoints.WebPortrait]) {
    console.log('WebPortrait ' + Breakpoints.WebPortrait);
  }

  if (breakpointMatches[Breakpoints.Tablet]) {
    console.log('Tablet ' + Breakpoints.Tablet);
  }

  if (breakpointMatches[Breakpoints.TabletPortrait]) {
    console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
  }

  if (breakpointMatches[Breakpoints.TabletLandscape]) {
    console.log('TabletLandscape ' + Breakpoints.TabletLandscape);
  }

  if (breakpointMatches[Breakpoints.Handset]) {
    console.log('Handset ' + Breakpoints.Handset);
  }

  if (breakpointMatches[Breakpoints.HandsetLandscape]) {
    console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
  }

  if (breakpointMatches[Breakpoints.HandsetPortrait]) {
    console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);
  }

  if (breakpointMatches[Breakpoints.XSmall]) {
    console.log('XSmall ' + Breakpoints.XSmall);
  }

  if (breakpointMatches[Breakpoints.Small]) {
    console.log('Small ' + Breakpoints.Small);
  }

  if (breakpointMatches[Breakpoints.Medium]) {
    console.log('Medium ' + Breakpoints.Medium);
  }

  if (breakpointMatches[Breakpoints.Large]) {
    console.log('Large ' + Breakpoints.Large);
  }

  if (breakpointMatches[Breakpoints.XLarge]) {
    console.log('XLarge ' + Breakpoints.XLarge);
  }
};
