 export default function findItemsOver20(list){
    var itemsOver20 = [];
    for(var i = 0;i < list.length; i++){
      var items = list[i]
    if (items.qty > 20){
     //itemsOver20[items.qty] =0
      //list.forEach(items => {items.qty > 20})
        itemsOver20.push(items)
      //itemsOver20[items.qty] ++;
      
      }
      
    }
      return itemsOver20
    };

    var itemList = [
        {name : 'apples', qty : 10} ,
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
      
    ];
    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];