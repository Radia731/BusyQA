
function List(){

    const fruits =[ {id:1, name: "apple", calories: 95},
                   {id:2, name: "orange", calories: 36},
                  {id:3, name: "banana", calories: 56}];

    fruits.sort((a,b)=> a.name.localeCompare(b.name));   
    fruits.sort((a,b)=> b.calories - b.calories);        
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}
export default List;