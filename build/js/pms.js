"use strict";
let ids = 'x';
let base64 = '';
let arrid = JSON.parse(localStorage.getItem('PID'));
let arrname = JSON.parse(localStorage.getItem('PNAME'));
let arrcategory = JSON.parse(localStorage.getItem('PCATEGORY'));
let arrimage = JSON.parse(localStorage.getItem('PIMAGE'));
let arrprice = JSON.parse(localStorage.getItem('PPRICE'));
let arrdesc = JSON.parse(localStorage.getItem('PDESC'));
let arrmode = JSON.parse(localStorage.getItem('PMODE'));
// localStorage.clear();
// viewData();
let img2 = document.getElementById('pimage');
img2.addEventListener('change', function () {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
        base64 = reader.result;
    });
    reader.readAsDataURL(img2.files[0]);
});
function clsModal() {
    document.getElementById("product-form").reset();
    document.getElementById("remChar").innerHTML = '';
}
function validate() {
    let pid = document.getElementById('pid');
    let pname = document.getElementById('pname');
    let pcategory = document.getElementById('pcategory');
    let pimage = base64;
    let pprice = document.getElementById('pprice');
    let pdesc = document.getElementById('pdesc');
    let ppayment = document.querySelector('payment');
    let checkBox = document.getElementById('checkBox');
    let flag = true;
    if (pid.disabled == false) {
        if (pid.value == '') {
            document.getElementById('iderr').innerHTML = "Enter product ID";
            flag = false;
        }
        else if (pid.value.length > 6) {
            document.getElementById('iderr').innerHTML = "Enter valid product ID (character < 6)";
            flag = false;
        }
        else if (parseInt(pid.value) < 1) {
            document.getElementById('iderr').innerHTML = "Product ID must be greater than 0";
            flag = false;
        }
        else if (!(localStorage.getItem('PID') === null) && JSON.parse(localStorage.getItem('PID')).includes(parseInt(pid.value))) {
            document.getElementById('iderr').innerHTML = "Enter unique product ID";
            flag = false;
        }
        else {
            document.getElementById('iderr').innerHTML = "";
        }
    }
    if (pname.value == '') {
        document.getElementById('nameerr').innerHTML = "Enter product name";
        flag = false;
    }
    else {
        document.getElementById('nameerr').innerHTML = "";
    }
    if (pimage == '') {
        document.getElementById('imgerr').innerHTML = "Select product image";
        flag = false;
    }
    else {
        document.getElementById('imgerr').innerHTML = "";
    }
    if (pcategory.value == '') {
        document.getElementById('categoryerr').innerHTML = "Select product category";
        flag = false;
    }
    else {
        document.getElementById('categoryerr').innerHTML = "";
    }
    if (pprice.value == '') {
        document.getElementById('priceerr').innerHTML = "Enter product price";
        flag = false;
    }
    else if (parseFloat(pprice.value) > 1000000 || parseFloat(pprice.value) <= 0) {
        document.getElementById('priceerr').innerHTML = "Enter product price (less than 10 lakh)";
        flag = false;
    }
    else {
        document.getElementById('priceerr').innerHTML = "";
    }
    if (pdesc.value == '') {
        document.getElementById('descerr').innerHTML = "Enter product prdescriptionce";
        flag = false;
    }
    else {
        document.getElementById('descerr').innerHTML = "";
    }
    // if((ppayment)?.checked==null) {
    //     document.getElementById('paymenterr')!.innerHTML = "Select payment option";
    //     flag = false;
    // } else {
    //     document.getElementById('paymenterr')!.innerHTML = "";
    // }
    if (!checkBox.checked) {
        document.getElementById('checkerr').innerHTML = "Please select the checkbox";
        flag = false;
    }
    else {
        document.getElementById('checkerr').innerHTML = "";
    }
    return flag;
}
function addData() {
    arrid = JSON.parse(localStorage.getItem('PID'));
    arrname = JSON.parse(localStorage.getItem('PNAME'));
    arrcategory = JSON.parse(localStorage.getItem('PCATEGORY'));
    arrimage = JSON.parse(localStorage.getItem('PIMAGE'));
    arrprice = JSON.parse(localStorage.getItem('PPRICE'));
    arrdesc = JSON.parse(localStorage.getItem('PDESC'));
    arrmode = JSON.parse(localStorage.getItem('PMODE'));
    let pid = document.getElementById('pid');
    let pname = document.getElementById('pname');
    let pcategory = document.getElementById('pcategory');
    let pimage = base64;
    let pprice = document.getElementById('pprice');
    let pdesc = document.getElementById('pdesc');
    let pmode = document.querySelector('input[name="payment"]:checked');
    if (validate()) {
        if (ids == 'x') {
            if (arrid == null) {
                let data1 = [parseInt(pid.value)];
                let data2 = [pname.value];
                let data3 = [pimage];
                let data4 = [parseInt(pprice.value)];
                let data5 = [pdesc.value];
                let data6 = [pcategory.value];
                let data7 = [pmode.value];
                localStorage.setItem('PID', JSON.stringify(data1));
                localStorage.setItem('PNAME', JSON.stringify(data2));
                localStorage.setItem('PIMAGE', JSON.stringify(data3));
                localStorage.setItem('PPRICE', JSON.stringify(data4));
                localStorage.setItem('PDESC', JSON.stringify(data5));
                localStorage.setItem('PCATEGORY', JSON.stringify(data6));
                localStorage.setItem('PMODE', JSON.stringify(data7));
            }
            else {
                arrid.push(parseInt(pid.value));
                arrname.push(pname.value);
                arrimage.push(pimage);
                arrprice.push(parseInt(pprice.value));
                arrdesc.push(pdesc.value);
                arrcategory.push(pcategory.value);
                arrmode.push(pmode.value);
                localStorage.setItem('PID', JSON.stringify(arrid));
                localStorage.setItem('PNAME', JSON.stringify(arrname));
                localStorage.setItem('PIMAGE', JSON.stringify(arrimage));
                localStorage.setItem('PPRICE', JSON.stringify(arrprice));
                localStorage.setItem('PDESC', JSON.stringify(arrdesc));
                localStorage.setItem('PCATEGORY', JSON.stringify(arrcategory));
                localStorage.setItem('PMODE', JSON.stringify(arrmode));
            }
        }
        else {
            arrid[ids] = pid.value;
            arrname[ids] = pname.value;
            arrimage[ids] = pimage;
            arrprice[ids] = pprice.value;
            arrdesc[ids] = pdesc.value;
            arrcategory[ids] = pcategory.value;
            arrmode[ids] = pmode.value;
            localStorage.setItem('PID', JSON.stringify(arrid));
            localStorage.setItem('PNAME', JSON.stringify(arrname));
            localStorage.setItem('PIMAGE', JSON.stringify(arrimage));
            localStorage.setItem('PPRICE', JSON.stringify(arrprice));
            localStorage.setItem('PDESC', JSON.stringify(arrdesc));
            localStorage.setItem('PCATEGORY', JSON.stringify(arrcategory));
            localStorage.setItem('PMODE', JSON.stringify(arrmode));
        }
        location.href = ('/build/productRecords.html');
        // if(document.getElementById('pid')!.disabled==false) {
        //     const toastTrigger = document.getElementById('addData');
        //     const toastLiveExample = document.getElementById('liveToast');
        //     if (toastTrigger) {
        //         // toastTrigger.addEventListener('click', () => {
        //             const toast = new bootstrap.Toast(toastLiveExample);
        //             toast.show();
        //         // })
        //     }
        //     document.getElementById("product-form")!.reset();
        // } else {
        //     location.reload();
        // }
    }
}
function viewData() {
    if (arrid !== null) {
        let html = '';
        for (let k in arrid) {
            html += `<tr>
            <td>${arrid[k]}</td>
            <td>${arrname[k]}</td>
            <td>${arrcategory[k]}</td>
            <td><div style="width:100px; height:100px;"><img style="max-width: 100%; max-height:100%;" src="${arrimage[k]}"/></div</td>
            <td>${arrprice[k]}</td>
            <td>${arrdesc[k]}</td>
            <td>${arrmode[k]}</td>
            <td><button class="btn" onclick="editData(${k})" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit"></i></button></td>
            <td><button class="btn" onclick="deleteData(${k})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
        }
        document.getElementById('tblrow').innerHTML = html;
    }
}
function editData(delid) {
    ids = delid;
    console.log(delid);
    base64 = arrimage[delid];
    document.getElementById('pid').value = arrid[delid];
    document.getElementById('pname').value = arrname[delid];
    document.getElementById('pcategory').value = arrcategory[delid];
    document.getElementById('pprice').value = arrprice[delid];
    document.getElementById('pdesc').innerHTML = arrdesc[delid];
    document.querySelector(`input[value="${arrmode[delid]}"]`).checked = true;
}
function deleteData(delid) {
    arrid.splice(delid, 1);
    arrname.splice(delid, 1);
    arrimage.splice(delid, 1);
    arrprice.splice(delid, 1);
    arrdesc.splice(delid, 1);
    arrcategory.splice(delid, 1);
    arrmode.splice(delid, 1);
    localStorage.setItem('PID', JSON.stringify(arrid));
    localStorage.setItem('PNAME', JSON.stringify(arrname));
    localStorage.setItem('PIMAGE', JSON.stringify(arrimage));
    localStorage.setItem('PPRICE', JSON.stringify(arrprice));
    localStorage.setItem('PDESC', JSON.stringify(arrdesc));
    localStorage.setItem('PCATEGORY', JSON.stringify(arrcategory));
    localStorage.setItem('PMODE', JSON.stringify(arrmode));
    viewData();
}
function sortById() {
    for (var i = 0; i < arrid.length; i++) {
        for (var j = 0; j < (arrid.length - i - 1); j++) {
            if (arrid[j] > arrid[j + 1]) {
                var temp = arrid[j];
                arrid[j] = arrid[j + 1];
                arrid[j + 1] = temp;
                temp = arrname[j];
                arrname[j] = arrname[j + 1];
                arrname[j + 1] = temp;
                temp = arrimage[j];
                arrimage[j] = arrimage[j + 1];
                arrimage[j + 1] = temp;
                temp = arrprice[j];
                arrprice[j] = arrprice[j + 1];
                arrprice[j + 1] = temp;
                temp = arrdesc[j];
                arrdesc[j] = arrdesc[j + 1];
                arrdesc[j + 1] = temp;
                temp = arrcategory[j];
                arrcategory[j] = arrcategory[j + 1];
                arrcategory[j + 1] = temp;
                temp = arrmode[j];
                arrmode[j] = arrmode[j + 1];
                arrmode[j + 1] = temp;
            }
        }
    }
    viewData();
}
function sortByName() {
    for (var i = 0; i < arrid.length; i++) {
        for (var j = 0; j < (arrid.length - i - 1); j++) {
            if (arrname[j].toUpperCase() > arrname[j + 1].toUpperCase()) {
                var temp = arrid[j];
                arrid[j] = arrid[j + 1];
                arrid[j + 1] = temp;
                temp = arrname[j];
                arrname[j] = arrname[j + 1];
                arrname[j + 1] = temp;
                temp = arrimage[j];
                arrimage[j] = arrimage[j + 1];
                arrimage[j + 1] = temp;
                temp = arrprice[j];
                arrprice[j] = arrprice[j + 1];
                arrprice[j + 1] = temp;
                temp = arrdesc[j];
                arrdesc[j] = arrdesc[j + 1];
                arrdesc[j + 1] = temp;
                temp = arrcategory[j];
                arrcategory[j] = arrcategory[j + 1];
                arrcategory[j + 1] = temp;
                temp = arrmode[j];
                arrmode[j] = arrmode[j + 1];
                arrmode[j + 1] = temp;
            }
        }
    }
    viewData();
}
function sortByPrice() {
    for (var i = 0; i < arrid.length; i++) {
        for (var j = 0; j < (arrid.length - i - 1); j++) {
            if (arrprice[j] > arrprice[j + 1]) {
                var temp = arrid[j];
                arrid[j] = arrid[j + 1];
                arrid[j + 1] = temp;
                temp = arrname[j];
                arrname[j] = arrname[j + 1];
                arrname[j + 1] = temp;
                temp = arrimage[j];
                arrimage[j] = arrimage[j + 1];
                arrimage[j + 1] = temp;
                temp = arrprice[j];
                arrprice[j] = arrprice[j + 1];
                arrprice[j + 1] = temp;
                temp = arrcategory[j];
                arrcategory[j] = arrcategory[j + 1];
                arrcategory[j + 1] = temp;
                temp = arrdesc[j];
                arrdesc[j] = arrdesc[j + 1];
                arrdesc[j + 1] = temp;
                temp = arrmode[j];
                arrmode[j] = arrmode[j + 1];
                arrmode[j + 1] = temp;
            }
        }
    }
    viewData();
}
function filterProducts(y) {
    let html1 = '';
    for (let x = 0; x < arrid.length; x++) {
        if ((arrname[x].toUpperCase()).includes(y.toUpperCase()) || (arrdesc[x].toUpperCase()).includes(y.toUpperCase())) {
            html1 += `<tr>
            <td>${arrid[x]}</td>
            <td>${arrname[x]}</td>
            <td>${arrcategory[x]}</td>
            <td><div style="width:100px; height:100px;"><img style="max-width: 100%; max-height:100%;" src="${arrimage[x]}"/></div</td>
            <td>${arrprice[x]}</td>
            <td>${arrdesc[x]}</td>
            <td>${arrmode[x]}</td>
            <td><button class="btn" onclick="editData(${x})" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit"></i></button></td>
            <td><button class="btn" onclick="deleteData(${x})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
        }
        document.getElementById('tblrow').innerHTML = html1;
    }
}
function countChar(val) {
    var len = val.value.length;
    if (len < 255) {
        document.getElementById('remChar').innerHTML = `(${(254 - len)})`;
    }
    else {
        val.value = val.value.substring(0, 255);
    }
}
;
