
			window.onload = function(){
				var degs = 90;
				var num = 0;
				var all = document.getElementById("limiande");
				var small = document.getElementsByClassName("sif");
				var big = document.getElementsByClassName("bif");
				console.log(big);
				//排列大小盒子的前后左右四个面
				for(var i = 0; i<big.length-2;i++){
					big[i].style.transform = "rotateY("+i*degs+"deg) translateZ(100px)";
					small[i].style.transform = "rotateY("+i*degs+"deg) translateZ(50px)"
				}
				//排列大小盒子上下的两个面
				num = big.length-2;
				for(var i = num; i< big.length;i++){
					if(i%2 == 0){
						big[i].style.transform = "rotateX(270deg) translateZ(100px)";
						small[i].style.transform = "rotateX(270deg) translateZ(50px)";
						
					}else{
						big[i].style.transform = "rotateX(90deg) translateZ(100px)";
						small[i].style.transform = "rotateX(90deg) translateZ(50px)";
					}
				}
				//让总体盒子选装
				var rota = -60;
				var active =  function(){
					if (rota <= 360) {
						rota += 0.1;
						all.style.transform = "rotateX("+rota+"deg) rotateY("+rota+"deg)";
					
				}else{
					 rota = 0;
			            container.style.transform= "rotateX("+rota+"deg) rotateY("+rota+"deg)";
					}
				}
				/*开启计时器 让active函数延迟0.5S循环调用 没4ms调用一次*/
				setTimeout(function(){setInterval(active, 4);},500);
			/*鼠标进入事件*/
			all.onmouseover = function(){
				setall(200);
			}
			/*鼠标离开时间*/
			all.onmouseout = function(){
				setall(100);
			}
				/*封装函数*/
				function setall(even){
					for(var i = 0; i<big.length-2;i++){
						big[i].style.transform = "rotateY("+i*degs+"deg) translateZ("+even+"px)";
					}
					num = big.length-2;
					for(var i = num; i< big.length;i++){
						if(i%2 == 0){
							big[i].style.transform = "rotateX(270deg) translateZ("+even+"px)";
						}else{
							big[i].style.transform = "rotateX(90deg) translateZ("+even+"px)";
						}
					}
				}
}