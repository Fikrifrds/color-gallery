import * as React from 'react';

function Color(){
const categories = ['red', 'green', 'yellow', 'blue', 'brown', 'gray', 'purple', 'pink', 'black']
const [datas, setDatas] = React.useState(Array.apply(null, {length: 40}).map( () => getRandomColor(categories) )); 
const [colors, setColors] = React.useState(datas); // Give intial state of random colors
const [darker, setDarker] = React.useState(false); // Give initial state of darker

React.useEffect(() => {
    setDatas(datas)
}, []) // with [], datas just render one time when page first loaded


function getRandomColor(cat: any[] | string[]) {
    return cat[Math.floor(Math.random() * cat.length)];
}

const handleChooseCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filtered = datas.filter( (data: string) => data.includes(event.target.value) )
    setColors(filtered);
};

const handleClickSaturation = () => {
    setDarker(!darker);
};

  return (
    <div>   
        <div>
            <span>Filtered by category  </span>
            <select 
            onChange={handleChooseCategory}
            >
                <option value="">All</option>
                {categories.map( (category: string, index: string | number | undefined) => (
                <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
        <br/>
        <div>
            <input type="checkbox" onChange={handleClickSaturation} /> Darker
        </div>
      
        <div className="flex-4">
        { 
            darker ?
            colors.filter( (color: string) => ['black', 'gray', 'brown'].includes(color)).map( (color: string | undefined, index: string | number | undefined) => (
                <div key={index} className="color-element" style={{ backgroundColor: color }} />
            ))
            :
            colors.map( (color: string | undefined, index: string | number | undefined) => (
            <div key={index} className="color-element" style={{ backgroundColor: color }} />
        ))
    }
        </div>
      
    </div>
  );
}

export default Color;
