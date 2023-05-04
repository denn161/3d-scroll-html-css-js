//3d scroll 

let zSpacing =-1000,
    lastPos = zSpacing/5,
		$frames =  document.getElementsByClassName('frame') 
		 const frameArr =Array.from($frames)
		 const zValues = [] 
    
		  
	 window.onscroll = function (){
		  const top = document.documentElement.scrollTop 
			const delta = lastPos-top 
			lastPos = top 

			frameArr.forEach(function(item,index){
				   zValues.push((index*zSpacing)+zSpacing) 
					 zValues[index]+=delta*-5
           console.log(zValues)
					let transform = `translateZ(${zValues[index]}px)`,
					opacity = zValues[index]<Math.abs(zSpacing)/1.5?1:0
					item.setAttribute('style',`transform:${transform};opacity:${opacity}`)
					 
			})
	 }

	 window.scrollTo(0,1)

	 //audio 
	 const soundButton = document.querySelector('.soundbutton') 
	 const audio = document.querySelector('audio') 

	 soundButton.addEventListener('click',function(e){
		this.classList.toggle('paused')
		audio.paused ? audio.play():audio.pause()
		  
	 })

	 window.onfocus =function(){
		  soundButton.classList.contains('paused')?audio.pause():audio.play()
	 }
	 window.onblur =function(){
		 audio.pause()
	 }