var select = document.querySelector("#dropdown");
const enCollator = new Intl.Collator('en');
const comparator = enCollator.compare;

var keyList = [];
var nameList = [];

const options = []


// init select
window.addEventListener('load', function () {

    fetch(endpoint)
        .then((res) => { return res.json() })
        .then((data) => {


            data.forEach((item) => {

                if (!nameList.includes(item.contact_1_name))
                    nameList.push(item.contact_1_name);
            })

            document.querySelectorAll('#dropdown > option').forEach((option) => {
                if (options.includes(option.value)) option.remove()
                else options.push(option.value)
            })


            // keyList = (Object.keys(data[20]));


            nameList.forEach(function (item) {
                const optionObj = document.createElement("option");
                optionObj.textContent = item;
                select.appendChild(optionObj);
            });

            const optionNodes = Array.from(select.children);

            optionNodes.sort((a, b) => comparator(a.textContent, b.textContent));
            optionNodes.forEach((option) => select.appendChild(option));



        });


    // const options = vars.keyList;
    // const selectEls = document.querySelectorAll('.js-select');

    // selectEls.forEach((el) => {
    //     new Select(el, options);
    // });
});

// window.addEventListener('load', function sortSelect(selElem) {

//     // var tmpAry = new Array();
//     // for (var i = 0; i < selElem.options.length; i++) {
//     //     tmpAry[i] = new Array();
//     //     tmpAry[i][0] = selElem.options[i].text;
//     //     tmpAry[i][1] = selElem.options[i].value;
//     // }
//     // tmpAry.sort();
//     // while (selElem.options.length > 0) {
//     //     selElem.options[0] = null;
//     // }
//     // for (var i = 0; i < tmpAry.length; i++) {
//     //     var op = new Option(tmpAry[i][0], tmpAry[i][1]);
//     //     selElem.options[i] = op;
//     // }

//     const optionNodes = Array.from(selElem.children);
//     console.log(optionNodes);
//     const comparator = new Intl.Collator(lang.slice(0, 2)).compare;

//     optionNodes.sort((a, b) => comparator(a.textContent, b.textContent));
//     optionNodes.forEach((option) => selElem.appendChild(option));

//     return;
// });


