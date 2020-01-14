var list=top1.children;
      var con1=con.children;
      for(var i=0;i<list.length;i++){
         list[i].m=i;
         list[i].onclick=function(){
            var index=this.m;
            for(var j=0;j<list.length;j++){
               list[j].className="";
               con1[j].className="";
            }
            this.className="cc";
            con1[index].className="ccc"
         }
      }

