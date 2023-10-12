const url = "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

// const arr = [1,2,3,4,5]

// mul all by 2=> map=>output=[2,4,6,8,10]
// print only odd=> filter=> output=>1,3,5

async function getData(url,cb){
    const res= await fetch(url);
    const data = await res.json();
    cb(data) ;
}
function displayData(data){
    console.log(data);

    const delDes = data.map((curr,ind,arr)=> {
        let obj ={...curr}
        delete obj["description"]
        return obj
    })
    console.log(delDes);

    const mov2020 = delDes.filter((elem,ind,arr)=> elem.year==2020);
    console.log(mov2020);

    const div = delDes.filter((elem,ind,arr)=> ind%2 == 0);
    console.log(div);

//     div.reduce((accu,curr,ind,arr)=>{
//         console.log(accu);
// console.log(curr);
//     },0)

    console.log(mov2020.reduce((accu, curr, ind, arr)=>{
        return accu+curr.votes
    },0))
    
}
const data = getData(url,displayData)
console.log(data);