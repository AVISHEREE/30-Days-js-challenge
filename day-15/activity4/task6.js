function itemManager(){
    let items = [];
    function addItem(item){
        if(!items.includes(item)){
            items.push(item)
        }
    }
    function removeItem(item){
    items = items.filter((existingItem)=>existingItem !== item );
    }
    function listItem(){
        return items.slice();
    }
return {
    addItem,
    removeItem,
    listItem,
  };
}

let a = itemManager();
a.addItem('one')
a.addItem('two')
a.addItem('three')
console.log(a.listItem());
a.removeItem('two');
console.log(a.listItem());