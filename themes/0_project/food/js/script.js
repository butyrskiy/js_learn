import { hideTabContent, showTabContent } from "../modules/tabs.js";
export { tabs, tabsContent };


const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');


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