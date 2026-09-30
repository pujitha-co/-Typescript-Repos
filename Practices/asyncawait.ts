

function callingLavanay(){
    // console.log("Hey wait for 5 mins for me.. i am coming");






    // setTimeout(()=>{

    //    //var abc:string = "";
        
    //    console.log("Hey !!!! i reached");
    
    // }, 5000)
   

    
    var promoise = fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>{
        //console.log(response.json());

        var promised = response.json().then((data)=>{
             console.log(data);
        })
    })


    //promoise.

}


callingLavanay();  // Now i understnd it wil take 5 secs

console.log("Chatting with freinds!!!!");
