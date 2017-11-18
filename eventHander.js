var eventHander={
	addHander:function(element,event,functonname){
		if(element.addEventListener){
			element.addEventListener(event,functonname,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+event,functonname);
		}else{
			element["on"+event]=functonname;
		}
	},
	removeHander:function(element,event,functonname){
		if(element.removeEventListener){
			element.removeEventListener(event,functonname,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+event,functonname);
		}else{
			element["on"+event]=null;
		}
	},
	stopup:function(e){
		 if(e.stopPropagation){
          	e.stopPropagation();
          }else{
          	e.cancelBubble=true;
          }
      },
      preventDefault:function(e){
      	if(e.preventDefault){
      		e.preventDefault();
      	}else{
      		e.returnValue=false;
      	}
      }
	}


