(function () {
    document.addEventListener('DOMContentLoaded', function () {
        'use strict';

        const accordionButtons = document.getElementsByClassName('faq-accordion-button');
        const accordionIcons = document.getElementsByClassName('faq-accordion-button-icon');

        const adaptiveMenuButton = document.getElementById('adaptive-menu-button');
        const adaptiveMenuIconTop = document.getElementById('line-top');
        const adaptiveMenuIconBottom = document.getElementById('line-bottom');
        const adaptiveMenu = document.getElementById('adaptive-menu');

        const mainLinks = document.getElementsByClassName('link-main');
        const galleryLinks = document.getElementsByClassName('link-gallery');
        const aboutLinks = document.getElementsByClassName('link-about');
        const faqLinks = document.getElementsByClassName('link-faq');

        const mainBlock = document.getElementsByClassName('header')[0];
        const galleryBlock = document.getElementsByClassName('gallery')[0];
        const aboutBlock = document.getElementsByClassName('advantages')[0];
        const faqBlock = document.getElementsByClassName('faq')[0];

        const adaptiveLinks = document.getElementsByClassName('adaptive-link');

        for (let i = 0; i < adaptiveLinks.length; i++) {
            adaptiveLinks[i].addEventListener('click', function (e) {
                e.preventDefault();
                adaptiveMenuButton.classList.remove('button-active');
                adaptiveMenuIconTop.style.transform = 'rotateZ(90deg) translate(0, 0)';
                adaptiveMenuIconBottom.style.transform = 'rotateZ(90deg) translate(0, 0)';
                adaptiveMenuButton.style.backgroundColor = '#286347';
                adaptiveMenu.style.transform = 'translateX(420px)';
            });
        }

        for (let i = 0; i < mainLinks.length; i++) {
            mainLinks[i].addEventListener('click', function (e) {
                e.preventDefault();
                mainBlock.scrollIntoView({behavior: 'smooth'});
            });
        }
        for (let i = 0; i < aboutLinks.length; i++) {
            aboutLinks[i].addEventListener('click', function (e) {
                e.preventDefault();
                aboutBlock.scrollIntoView({behavior: 'smooth'});
            });
        }
        for (let i = 0; i < faqLinks.length; i++) {
            faqLinks[i].addEventListener('click', function (e) {
                e.preventDefault();
                faqBlock.scrollIntoView({behavior: 'smooth'});
            });
        }

        adaptiveMenuButton.addEventListener('click', function () {
            adaptiveMenuButton.classList.toggle('button-active');
           if (adaptiveMenuButton.classList.contains('button-active')) {
               adaptiveMenuIconTop.style.transform = 'rotateZ(135deg) translate(4px, -2px)';
               adaptiveMenuIconBottom.style.transform = 'rotateZ(45deg) translate(-4px, -2px)';
               adaptiveMenuButton.style.backgroundColor = '#1d3e2e';
               adaptiveMenu.style.transform = 'translateX(0)';
           } else {
               adaptiveMenuIconTop.style.transform = 'rotateZ(90deg) translate(0, 0)';
               adaptiveMenuIconBottom.style.transform = 'rotateZ(90deg) translate(0, 0)';
               adaptiveMenuButton.style.backgroundColor = '#286347';
               adaptiveMenu.style.transform = 'translateX(420px)';
           }
        });

        for (let i = 0; i < accordionButtons.length; i++) {
            accordionButtons[i].addEventListener('click', function () {
                this.classList.toggle("active");
                let accordionText = this.nextElementSibling;
                if (accordionText.style.maxHeight) {
                    accordionText.style.maxHeight = null;
                    accordionText.style.paddingBottom = "0";
                    accordionButtons[i].style.borderBottomRightRadius = "10px";
                    accordionButtons[i].style.borderBottomLeftRadius = "10px";
                    accordionIcons[i].style.transform = "rotateZ(0)";
                } else {
                    accordionText.style.maxHeight = accordionText.scrollHeight + "px";
                    accordionText.style.paddingBottom = "20px";
                    accordionButtons[i].style.borderBottomRightRadius = "0";
                    accordionButtons[i].style.borderBottomLeftRadius = "0";
                    accordionIcons[i].style.transform = "rotateZ(45deg)";
                }
            });
        }
    });
})();