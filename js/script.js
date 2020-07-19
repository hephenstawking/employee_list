"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab__item'),
          tabsContent = document.querySelectorAll('.content'),
          tabParent = document.querySelector('.header__logo'),
          tabText = document.querySelector('.header__text');
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('tab__hide');
            item.classList.remove('tab__active', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('icon__active')
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('tab__active', 'fade');
        tabsContent[i].classList.remove('tab__hide');
        tabs[i].classList.add('icon__active');
    }
    function showHeaderText(i = 0) {
        const headerText = [
            'Штатное расписание',
            'Данные по FTE',
            'Изменения в штатном расписании'
        ];
        tabText.innerHTML = `${headerText[i]}`;
    }
    
    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tab__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                    showHeaderText(i);
                }
            });
        }
    });
});