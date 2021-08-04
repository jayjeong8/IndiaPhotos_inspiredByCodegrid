
const modal = document.querySelector('.about-modal');
const close = document.querySelector('.about-modal span');
const content = document.querySelector('.about-modal-content');
const open = document.querySelector('.site-info');

//about 버튼 클릭시
open.addEventListener('click', function () {
    modal.style.display = 'block';
})

// close 버튼 클릭시

close.addEventListener('click',function () {
    modal.style.display='none';
})

// 이미지 바깥 클릭시
modal.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target === content) {
        false
    }else{
        modal.style.display='none';
    }
})

