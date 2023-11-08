//fetch from monogoDB， present the data into the page


window.addEventListener('load',()=>{
    //Fetch from database
    fetch('/CheckDetail')
    .then(resp=> resp.json())
    .then(data => {
        console.log(data.data);
        for(let i=0;i<data.data.length;i++) {                     
            let name = data.data[i].Name;
            let title = data.data[i].Title;
            let img = data.data[i].Img;

            // Create a <div> to contain Name and Title
            let infoDiv = document.createElement('div');
            infoDiv.className = 'info-container'; // add a css clss name to control the style

            // Create a <img> and add a src using the base64ImageData string saved in database
            let imgElement = document.createElement('img');
            imgElement.src = img;
            infoDiv.appendChild(imgElement);

           // Create a <h1> and get data from the database
           let nameElement = document.createElement('h1');
           nameElement.innerHTML = name;
           infoDiv.appendChild(nameElement);

           // Create a <h2> and get data from the database
           let titleElement = document.createElement('h2');
           titleElement.innerHTML = title;
           infoDiv.appendChild(titleElement);

            // Add the new <div> into the id="gallery"
            document.getElementById('gallery').appendChild(infoDiv);
        }

    })

})