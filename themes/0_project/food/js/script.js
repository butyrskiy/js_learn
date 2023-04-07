import { hideTabContent, showTabContent } from "../modules/tabs.js";
import { tabs, tabsParent } from "../modules/constants.js";
import { getTimeRemaining, deadline, setClock } from "../modules/timer.js";

tabsParent.addEventListener('click', (e) => {
  const target = e.target;

  if(target && target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if(target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

hideTabContent();
showTabContent();
getTimeRemaining(deadline);
setClock('.timer', deadline);