let btn = document.querySelectorAll('.works__tabs__btn');
let tabsItems = document.querySelectorAll('.works__tabs__image');

btn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    btn.forEach(function (btn) { btn.classList.remove('btn-active') });
    e.currentTarget.classList.add('btn-active');

    tabsItems.forEach(function (element) { element.classList.remove('tabs-active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-active');
  });
});