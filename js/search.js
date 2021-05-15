const endpoint = "https://data.cityofchicago.org/resource/ydr8-5enu.json";
let url = endpoint + "?";

const temp = document.querySelector(".template");
const select = document.querySelector("#dropdown");
const data = document.querySelector('#data');

const enCollator = new Intl.Collator('en');
const comparator = enCollator.compare;

let nameList = new Array();
let options = new Array();


// init select
window.addEventListener('load', function () {
    // let home = document.querySelector("#home");
    // home.focus();


    fetch(endpoint)
        .then((res) => { return res.json() })
        .then((data) => {

            // console.log(data);


            data.forEach((item) => {


                if (!nameList.includes(item.contact_1_name) && item.contact_1_name != undefined) {

                    let addr = [item.street_number, item.street_direction, item.street_name, item.suffix, item.contact_1_city, item.contact_1_state, item.contact_1_zipcode].join(' ');
                    let info = ["Address: " + addr, "Pin: " + item.pin1, "Community Area: " + item.community_area, "Coordinates: " + `[${item.xcoordinate},${item.ycoordinate}]`];


                    nameList.push(item.contact_1_name);

                    let clone = temp.cloneNode(true);
                    let br = document.createElement("br");
                    br.classList.add('results');

                    let h1 = clone.querySelector(".card-title");
                    h1.innerText = item.contact_1_name;

                    let name = item.contact_1_name.replace(/[. ,/&]/g, "");

                    let list = clone.querySelector("#list");
                    let listItem = document.createElement("li");
                    listItem.innerText = (info[0]);
                    list.append(listItem);
                    listItem.classList.add("list-group-item");
                    listItem.parentElement.classList.add(name);


                    let allData = document.querySelector("#allData");
                    allData.appendChild(br);
                    allData.appendChild(clone);
                    clone.classList.remove("template");
                    clone.classList.add("allData");

                } else if (nameList.includes(item.contact_1_name) && item.contact_1_name != undefined) {

                    let addr = [item.street_number, item.street_direction, item.street_name, item.suffix, item.contact_1_city, item.contact_1_state, item.contact_1_zipcode].join(' ');
                    let info = ["Address: " + addr, "Pin: " + item.pin1, "Community Area: " + item.community_area, "Coordinates: " + `[${item.xcoordinate},${item.ycoordinate}]`];

                    let listItem = document.createElement("li");
                    listItem.innerText = (info[0]);
                    listItem.classList.add("list-group-item");

                    let name = item.contact_1_name.replace(/[. ,/&]/g, "");


                    let list = document.querySelector("." + name);

                    // console.log(list);
                    for (let i = 0; i < 3; i++) {
                        if (list.childNodes[i].innerText != listItem.innerText) {
                            list.append(listItem);
                        }

                        //     if (this.innerText == listItem.innerText) {
                        //         break;
                        //     }
                        //     else list.appendChild(listItem);
                    }
                }
            })


            nameList.forEach((name) => {

                let optionObj = document.createElement("option");
                optionObj.textContent = name;
                select.appendChild(optionObj);
            });

            let optionNodes = Array.from(select.children);
            options = optionNodes.slice(1, optionNodes.length);

            // console.log(options);

            options.sort((a, b) => comparator(a.textContent, b.textContent));
            options.forEach((option) => select.appendChild(option));

        });


    // console.log(select);


    // document.querySelectorAll('#dropdown > option').forEach((option) => {
    //     if (options.includes(option.value)) option.remove()
    //     else options.push(option.value)
    // })


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


