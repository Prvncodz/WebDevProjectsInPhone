
const scrollLeftBtn = document.getElementById('scroll-L');
const scrollRightBtn = document.getElementById('scroll-R');
const scrollSectionLeft = document.querySelector('.scrollWrapper-left');
const scrollSectionRight = document.querySelector('.scrollWrapper-right');


const tabsContainer = document.querySelector('.tabsContainer');

const infoTabs = Array.from(document.querySelectorAll('.infoTab'));
const moreInfoTabs = Array.from(document.querySelectorAll('.moreInfo'))

const LearnMore = document.getElementById('lm');
const hiddenParagraph = document.getElementById('hp');


//scroll

function updateScroll() {
  let scrollLeft = tabsContainer.scrollLeft;
  let scrollWidth = tabsContainer.scrollWidth;
  let clientWidth = tabsContainer.clientWidth;

  if (scrollLeft > 0) {
    scrollSectionLeft.classList.add('show');
  } else {
    scrollSectionLeft.classList.remove('show');
  }

  if (scrollLeft + clientWidth < scrollWidth) {
    scrollSectionRight.classList.add('show');
  } else {
    scrollSectionRight.classList.remove('show');
  }
}

window.addEventListener("load", updateScroll);
tabsContainer.addEventListener("scroll", updateScroll);

scrollLeftBtn.addEventListener("click", () => {
  tabsContainer.scrollBy({ left: -200, behaviour: 'smooth' });
});

scrollRightBtn.addEventListener("click", () => {
  tabsContainer.scrollBy({ left: 200, behaviour: 'smooth' });
});




//info tabs

for (let i = 0; i < infoTabs.length; i++) {

  infoTabs[i].addEventListener("click", () => {

    let curSpan = infoTabs[i].querySelector('span');
    let
      curSym = curSpan.textContent;

    for (let j = 0; j < moreInfoTabs.length; j++) {
      if (j !== i) {
        moreInfoTabs[j].classList.remove('showInfo');
        infoTabs[j].querySelector('span').textContent = "+";
      }
    }


    if (curSym === "+") {
      curSpan.textContent = "×";
    } else {
      curSpan.textContent = "+";
    }
    moreInfoTabs[i].classList.toggle('showInfo');

  });

}

//learn more

LearnMore.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenParagraph.classList.add('showPara');
  LearnMore.style.display = "none";
});



