
document.getElementById('toggle-button1').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
});



document.addEventListener("DOMContentLoaded", function () {
    const sBtn = document.getElementById('simple2');
    const data1 = document.getElementById('simple1');
    const list1 = document.getElementById('all1');
    const fav = document.getElementById('favs');

    sBtn.addEventListener('click', function () {
        const d = data1.value;
        if (d) {
            const a1 = document.createElement('div');
            a1.classList.add('row');
            a1.classList.add('D1');

            const c1 = document.createElement('input');
            c1.type = 'checkbox';
            c1.classList.add('checkB', 'col-3');
            a1.appendChild(c1);

            const d1 = document.createElement('span');
            d1.innerHTML = d;
            d1.classList.add('sData', 'col-8');
            a1.appendChild(d1);

            const str = document.createElement('button');
            str.classList.add('sStar', 'col-3', 'bi', 'bi-star');
            str.value = '0';
            a1.appendChild(str);

            str.addEventListener('click', function () {
                if (str.value === '0') {
                    str.classList.remove('bi-star');
                    str.classList.add('bi-star-fill');
                    str.value = '1';

                    const a1Clone = a1.cloneNode(true);
                    a1Clone.querySelector('.sStar').addEventListener('click', function () {
                        str.classList.remove('bi-star-fill');
                        str.classList.add('bi-star');
                        str.value = '0';
                        fav.removeChild(a1Clone);
                    });

                    a1.favClone = a1Clone;
                    a1Clone.original = a1;

                    fav.appendChild(a1Clone);
                } else if (str.value === '1') {
                    str.classList.remove('bi-star-fill');
                    str.classList.add('bi-star');
                    str.value = '0';

                    if (a1.favClone) {
                        fav.removeChild(a1.favClone);
                        delete a1.favClone;
                    }
                }
            });

            list1.appendChild(a1);
            data1.placeholder = '';

            data1.value = '';
        }
    });

    const dateText = document.getElementById('date1');
    const dateDate = document.getElementById('date2');
    const dateBtn = document.getElementById('simple3');
    const resDate = document.getElementById('date3');
    const fav1 = document.getElementById('favs');

    dateBtn.addEventListener('click', function () {
        if (dateText.value && dateDate.value) {
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('row', 'align-items-center', 'mb-3');

            const dChckBCol = document.createElement('div');
            dChckBCol.classList.add('col-1');
            const dChckB = document.createElement('input');
            dChckB.type = 'checkbox';
            dChckB.classList.add('checkB');
            dChckBCol.appendChild(dChckB);

            const dDataCol = document.createElement('div');
            dDataCol.classList.add('col-4');
            const dData = document.createElement('span');
            dData.innerHTML = dateText.value;
            dData.classList.add('sData');
            dDataCol.appendChild(dData);

            const dDateCol = document.createElement('div');
            dDateCol.classList.add('col-3');
            const dDate = document.createElement('span');
            dDate.innerHTML = dateDate.value;
            dDate.classList.add('sData');
            dDateCol.appendChild(dDate);

            const dStarCol = document.createElement('div');
            dStarCol.classList.add('col-2');
            const dStar = document.createElement('button');
            dStar.classList.add('sStar', 'bi', 'bi-star');
            dStar.value = '0';
            dStar.addEventListener('click', function () {
                if (dStar.value === '0') {
                    dStar.classList.remove('bi-star');
                    dStar.classList.add('bi-star-fill');
                    dStar.value = '1';

                    const dateDivClone = dateDiv.cloneNode(true);
                    dateDivClone.querySelector('.sStar').addEventListener('click', function () {
                        dStar.classList.remove('bi-star-fill');
                        dStar.classList.add('bi-star');
                        dStar.value = '0';
                        fav1.removeChild(dateDivClone);
                    });

                    dateDiv.favClone = dateDivClone;
                    dateDivClone.original = dateDiv;

                    fav1.appendChild(dateDivClone);
                } else if (dStar.value === '1') {
                    dStar.classList.remove('bi-star-fill');
                    dStar.classList.add('bi-star');
                    dStar.value = '0';

                    if (dateDiv.favClone) {
                        fav1.removeChild(dateDiv.favClone);
                        delete dateDiv.favClone;
                    }
                }
            });
            dStarCol.appendChild(dStar);

            dateDiv.appendChild(dChckBCol);
            dateDiv.appendChild(dDataCol);
            dateDiv.appendChild(dDateCol);
            dateDiv.appendChild(dStarCol);

            resDate.appendChild(dateDiv);

            dateText.value = '';
            dateDate.value = '';
        }
    });

    const t = document.getElementById('tasks');
    const s = document.getElementById('star');
    const d = document.getElementById('date');
    const t1 = document.getElementById('all');
    const s1 = document.getElementById('favs');
    const d1 = document.getElementById('dates');

    t.addEventListener('click', function () {
        t1.style.display = 'block';
        s1.style.display = 'none';
        d1.style.display = 'none';
    })
    s.addEventListener('click', function () {
        s1.style.display = 'block';
        t1.style.display = 'none';
        d1.style.display = 'none';
    })
    d.addEventListener('click', function () {
        s1.style.display = 'none';
        t1.style.display = 'none';
        d1.style.display = 'block';
    })
});
