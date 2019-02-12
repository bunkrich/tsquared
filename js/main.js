    
    
    
    
    console.log('oopsie poopsie');


    // let list = [{
    //         "name": "Instagram",
    //         "link": "www.instagram.com",
    //         "img": "www.instagram.com/img"
    //     },
    //     {
    //         "name": "Facebookery",
    //         "link": "www.Facebook.com/ooopsiepoopie",
    //         "img": "www.Facebook.com/img"
    //     },
    //     {
    //         "name": "WhoMe",
    //         "link": "www.Facebook.com",
    //         "img": "www.Facebook.com/img"
    //     }
    // ]
    // let list = links.json
    // var list = [{
    //     "name": "Instagram",
    //     "link": "www.instagram.com",
    //     "img": "www.instagram.com/img"
    // },
    // {
    //     "name": "Facebookery",
    //     "link": "www.Facebook.com/ooopsiepoopie",
    //     "img": "www.Facebook.com/img"
    // },
    // {
    //     "name": "WhoMe",
    //     "link": "www.Facebook.com",
    //     "img": "www.Facebook.com/img"
    // }
    // ];

    let mainNav = document.querySelector('#main-nav ul');
    // mainNav.innerHTML = `<h1>WHO ME </h1>`;


    // for (var i = 0; i < list.length; i++) {
    //     console.log(list[i].name);
    //     // mainNav.innerHTML = `<h1>${list[i].name}: ${list[i].link}</h1>`;
    //     // var newcontent = document.createElement('div');
    //     // newcontent.innerHTML = "bar";
    // };



    // var ul = document.querySelector("ul");

    for (var i = 0; i < links.length; i++) {
        let link = links[i];
        let listItemLI = document.createElement("li");
        let listItem = document.createElement("button");
        console.log(`link----${link.link}`);
        listItem.textContent = link.name;
        // listItem.href = link.link;
        listItem.id = link.id;
       
        mainNav.appendChild(listItemLI).appendChild(listItem);

        listItem.addEventListener("click", function(event){
            console.log(`link----${link.content}`);
            event.preventDefault();
            let main = document.getElementById('main');
            main.innerHTML = link.content;
          });
    }


    // let linkmain = document.getElementById('link-bio').addEventListener("click", function(event){
    //     event.preventDefault()
    //     let bio = document.getElementById('bio')
    //     bio.innerHTML = "This is the BIO yo!"
    //   });