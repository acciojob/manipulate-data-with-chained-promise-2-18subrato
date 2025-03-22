let div = document.querySelector("#output")

        const arr = [1,2,3,4]

        new Promise(function(res,rej){
            let newArr = []
            for(let t of arr){
                if(t%2===0){
                    newArr.push(t)
                }
            }
            setTimeout(()=>{
                res(newArr)
            },1000)
        })
        .then((data)=>{
            div.innerText = data;
            let array = []
            for(let t of data){
                array.push(t*2)
            }
            return array;
        })
        .then((data)=>{
            setTimeout(()=>{
                div.innerText = data
            },3000)
        })