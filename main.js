function insert(num) {
    document.form.textview.value += num;
}
function equal() {
    document.form.textview.value = eval(document.form.textview.value);
}
function clean() {
    document.form.textview.value = '';
}
