<template>
    <div class="" id="containerCard">
        <div id="singleCard" 
        @mousemove="handleMouseMove"
        @mouseleave="resetRotation"
       
        >

            <div id="CardFront" class="absolute left-0 top-0 h-full w-full items-center rounded-3xl transition-all duration-1000 ease-in-out">
                <h2 class="mb-2 text-2xl font-bold">esto es cardFront</h2>
                <img class="size-24 object-cover" src="../assets/mesa.png" alt="">
           
            </div>

            <div id="CardBack" class="absolute left-0 top-0 h-full w-full items-center gap-3 justify-center rounded-3xl transition-all duration-1000 ease-in-out">esto es back</div>
        </div>
    </div>
</template>

<script setup>
import {ref}from vue;
const singleCard= ref(null)
const isFliped= ref(false);
/* rotación hacia todos lados */
const handleMouseMove = (event)=>{
    const rect= singleCard.value.getBoundingClientRect();
    const mouseX= event.clientX-rect.left;
    const mouseY= event.clientY -rect.top;
    const rotateX= (mouseY/rect.height -0.5)*50;
    const rotateY= (mouseX/rect.width -0.5)*50;

    singleCard.value.style.transform=`
    rotateX(${rotateX}deg)rotateY(${rotateY}deg)`;
};

const resetRotation = ()=>{
    singleCard.value.style.transform="";
    };


const handleFlip = ()=> {
    if (isFliped.value){
        singleCard.value.classList.remove("is-flipped");
        isFliped.value= false;
    }else{
        singleCard.value.classList.add("is-flipped");isFliped.value= true;
    }
};

</script>
<style scoped>
#containerCard{
    position: relative;
    width: 250px;
    height: 320px;
    }

#singleCard{
position: absolute;
width: 100%;
height:100% ;
transform-style: preserve-3d;
transition: all 0.5s ease;

}  


#cardFront{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #ffe728;
    color: #333;
}  
#cardBack{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #fafafa;
    color: #333;
    transform: rotateY(180deg);
}  

#singleCard:hover#cardFront{
    transform: rotateY(180deg);
}

#singleCard:hover#cardBack{
    transform: rotateY(360deg);
}
#singleCard .isFliped #cardBack{
    transform: rotateY(360deg);
}
#singleCard .isFliped #carFront{
    transform: rotateY(180deg);
}

</style>