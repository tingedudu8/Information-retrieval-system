async function search(val) {
    let url = 'http://localhost:3000/select?search='+val;
    try {
        let res = await fetch(url);
        const reSet = new Set();
        res.json().then(data => {
            let restaurants = data.docs;
            for (const each of restaurants) {
                let arr = each.restaurant;
                reSet.add(arr[0]);

            }


            const iterator1 = reSet.values();

            console.log(reSet);
            for (each of reSet) {
                document.getElementById("restaurant").innerHTML += iterator1.next().value + "<br>";
            }
            
            
        });

    } catch (error) {
        console.log(error);
    }
}





function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
    return val;
}


var input = document.getElementById("myInput");

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("restaurant").innerHTML = "";
    search(getVal());
    
  }
});

    


