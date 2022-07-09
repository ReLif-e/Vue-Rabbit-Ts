<template>
  <div>
    芜湖
  </div>
  <button @click="flag = !flag">点击</button>

    <Transition>
      <img v-if="flag" ref="target" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wppW?ver=7206">
    </Transition>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
// const ui = document.createElement('img')
const target = ref< HTMLImageElement | null>(null)

useIntersectionObserver(target,([{isIntersecting}])=>{
  console.log(isIntersecting);
  if(isIntersecting){
    target.value!.src = 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wppW?ver=7206'
  }
})

const flag = ref(true)
</script>

<style scoped>
/* div{
  height: 3000px;
} */

/* @keyframes dust {
  0%{
    transform: scale(1);
  }
   20%{
    transform: scale(1.9);
    
  }
   60%{
    transform: scale(0.5);
    
  }
   100%{
    transform: scale(1);
    
  }
}
.v-enter-active{
  animation: dust ;
  transition: all 1.5s;
} */
.v-enter-from{
  opacity: 0;
}
.v-enter-active{
  animation: dust ;
  transition: all 1.5s;
}
.v-enter-to{
  opacity: 1;
  
}



.v-leave-from{
  opacity: 1;
}
.v-leave-active{
  transition: all 1.5s;
}
.v-leave-to{
  opacity: 0;
  
}
</style>