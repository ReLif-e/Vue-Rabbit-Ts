<!-- <template>
  <div>
    芜湖
  </div>
  <img ref="target" src="https://img.zcool.cn/community/016814609ceffa11013f4720773afa.gif">
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
</script>

<style scoped>
div{
  height: 3000px;
}
</style> -->