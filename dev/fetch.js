
fetch('http://127.0.0.1:3000/graph')
   .then((response) => response.json())
   .then((data) => console.log(data))
