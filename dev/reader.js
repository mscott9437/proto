var xhttp=new XMLHttpRequest();

xhttp.addEventListener('load',load_data,false);

function load_data(){
    let response=JSON.parse(this.responseText);
    let i=0;
    while(i<response.part.length){
	sessionStorage.setItem(i,JSON.stringify(response.part[i].text));
	i++;
    }
    window.load_main();
    return false;
}

function load_main(){
    let response=JSON.parse(sessionStorage.getItem(0));
    let i=0;
    main.innerHTML='';
    while(i<response.length){
	let item=document.createElement('a');
	item.id=i;
	item.href='javascript:void(0)';
	item.addEventListener('click',load_page,false);
	let text=document.createTextNode(response[i]);
	item.appendChild(text);
	main.appendChild(item);
	item=document.createElement('div');
	text=document.createTextNode(i);
	item.appendChild(text);
	main.appendChild(item);
	i++;
    }
    return false;
}

function load_page(){
    let q=this.id;
    let response=JSON.parse(sessionStorage.getItem(q));
    main.innerHTML='';
    let item=document.createElement('a');
    item.href='javascript:void(0)';
    item.addEventListener('click',load_main,false);
    let text=document.createTextNode(response[0]);
    item.appendChild(text);
    main.appendChild(item);
    item=document.createElement('div');
    text=document.createTextNode(0);
    item.appendChild(text);
    main.appendChild(item);
    let i=1;
    while(i<response.length){
	let item=document.createElement('div');
	let text=document.createTextNode(response[i]);
	item.appendChild(text);
	main.appendChild(item);
	item=document.createElement('div');
	text=document.createTextNode(i);
	item.appendChild(text);
	main.appendChild(item);
	i++;
    }
    return false;
}

xhttp.open('GET','data.json',true);
xhttp.send(null);
