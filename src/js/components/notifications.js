import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, success, error, notice } from '@pnotify/core';

export const mySuccess = () => {
  success({
    text: "Loading photos.",
    hide: true,
    delay: 1000,
})};

export const myAlert = () => {
  alert({
    text: "There is no such photo.",
    hide: true,
    delay: 1000,
})};

export const myError = () => {
  error({
    text: "Fetch failed.",
    hide: true,
    delay: 1000,
})};

export const myNotice = () => {
  notice({
    text: "There is no more photos.",
    hide: true,
    delay: 1000,
})};
  
// const myInfo = info({
//   text: "I'm an info message."
// });