// ZipCode
handleZipCode = event => {
    let input = event.target
    input.value = zipCodeMask(input.value)
}

zipCodeMask = val => {
    if (!val) return "";
    val = val.replace(/\D/g, '');
    val = val.replace(/(\d{5})(\d)/, '$1-$2');
    return val;
}


/*

** No HTML
<input class="input" type="tel" maxlength="9" onkeyup="handleZipCode(event)">
 
*/


// Phone
handlePhone = event => {
    let input = event.target;
    input.value = phoneMask(input.value);
}

phoneMask = val => {
    if (!val) return '';
    val = val.replace(/\D/g, '');
    val = val.replace(/(\d{2})(\d)/, '($1) $2');
    val = val.replace(/(\d)(\d{4})$/, '$1-$2');
    return val;
}

/*

** No HTML

*/

//<input class="input" type="tel" maxlength="15" onkeydown="handlePhone(event)" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">