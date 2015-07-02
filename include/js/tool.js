function $id(id){
	return document.getElementById(id);
}


function escape_char(){
	$id('current_dir').innerHTML = decodeURI($id('current_dir').innerHTML) ;
	document.title = decodeURI(document.title);
	var table = $id('main').getElementsByTagName('table')[0];
	if(table) {
		var tr = table.getElementsByTagName('tr');
		if(tr && tr.length>=3){
			var td = tr[2].getElementsByTagName('td') ;
			if(td && td.length>=2){
				var a=td[1].getElementsByTagName('a');
				if( a && a[0].innerHTML == 'Parent Directory' ){
					a[0].innerHTML = '返回上级目录';
					a[0].style.color = '#666';
				}
			}
		}
	}
	if(navigator.userAgent.toLowerCase().indexOf('mobile')!='-1' ){	
		var imgs = $id('main').getElementsByTagName('img'); 
		for(var i=0; i<imgs.length; i++){
			imgs[i].src = imgs[i].src.replace('16x16', '48x48');
		}
	}
}

window.onload=function(){ escape_char(); };
