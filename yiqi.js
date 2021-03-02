// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("老婆我爱你,么么哒");
	   }else if(Dianji==2){
		   		alert("你是我遇到最好的女孩");
		   		
	   }else if(Dianji==3){
		   		alert("一生一世爱你");
		   		
	   }else if(Dianji==4){
		   		alert("家务我全干");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("房子写你名");
	  }else if(Dianji==7){
		   		alert("工资全上交");
	  }else if(Dianji==8){
		   		alert("老婆,祝你生日快乐!");
	
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("叫老公,哼哼哼,宝贝生气了");
	}
	
	

}