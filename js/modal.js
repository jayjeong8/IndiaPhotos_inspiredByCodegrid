const imageTagList = document.querySelectorAll('.inpage-img-container img');

const modal = document.querySelector('.img-modal');
const close = document.querySelector('.img-modal span');
const content = document.querySelector('.img-modal-content');

window.onload = function () {
    for (let i = 0; i <= imageTagList.length; i++) {
        imageTagList[i].addEventListener('click', function () {
            modal.style.display = 'block';
            content.src = this.src;
        })
    }
}


// close 버튼 클릭시

close.addEventListener('click', function () {
    modal.style.display = 'none';
})

// 이미지 바깥 클릭시
modal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === content) {
        false
    } else {
        modal.style.display = 'none';
    }
})


// $(".modal").click(function (e) {
//     if (e.target.className != "modal") {
//         return false;
//     } else {
//         $(".modal").hide();
//     }
// });
// });