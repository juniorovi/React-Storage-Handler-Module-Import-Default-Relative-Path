// Use local storage to manage cart data
const addToDb = id => {
    if (localStorage.getItem(id)) {
        console.log('already Exists');
    }
    else {
        localStorage.setItem(id, 1);
    }

}
export { addToDb }