import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';

window.PidNativeAuth = {
  isNative: Capacitor.isNativePlatform(),
  openBrowser: (url) => Browser.open({ url, presentationStyle: 'popover' }),
  closeBrowser: async () => { try { await Browser.close(); } catch (_) {} },
  listenForUrl: (callback) => App.addListener('appUrlOpen', (event) => {
    if (event && event.url) callback(event.url);
  }),
  getLaunchUrl: () => App.getLaunchUrl()
};
