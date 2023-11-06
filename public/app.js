// 
//fetch monogo上的数据， data填入page


window.addEventListener('load',()=>{
    fetch('/CheckDetail')
    .then(resp=> resp.json())
    .then(data => {


        // document.getElementById('detail_info').innerHTML = '';
        // document.getElementById('detail_title').innerHTML = '';
        // document.getElementById('detail_name').innerHTML = '';
        // document.getElementById('detail_p').innerHTML = '';

        console.log(data.data[1].Title);


        for(let i=0;i<data.data.length;i++) {                     
            let name = data.data[i].Name;
            let title = data.data[i].Title;

            // 创建一个新的<div>用于包含Name和Title
            let infoDiv = document.createElement('div');
            infoDiv.className = 'info-container'; // 添加一个CSS类名，用于样式控制

            // 创建并添加Name
            let nameElement = document.createElement('h1');
            nameElement.innerHTML = name;
            infoDiv.appendChild(nameElement);

            // 创建并添加Title
            let titleElement = document.createElement('h2');
            titleElement.innerHTML = title;
            infoDiv.appendChild(titleElement);

            // 创建并添加img
            let imgElement = document.createElement('img');
            imgElement.innerHTML = img;
            infoDiv.appendChild(imgElement);
        

            // for demo purpose
            const img = document.body.appendChild(document.createElement('img'));
            
            img.style.cssText = `width: 200px;height: 200px;border:1px solid #000;`;
            // when you want to show in the page, set the img.src to this base64 string.
            img.src = base64ImageData;





            // 将新的<div>添加到id="gallery"中
            document.getElementById('gallery').appendChild(infoDiv);
        }

    })

})