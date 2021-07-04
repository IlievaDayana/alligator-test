<template>
    <div class="slots-container flex flex-col justify-center align-middle w-96 h-96">
        <div class="flex flex-row justify-center align-middle p-10">
            <slot name="header"></slot>
        </div>
        <div class="flex flex-row justify-center align-middle p-5">
            <slot name="body"></slot>
        </div>
        <div class="flex flex-row justify-center align-middle p-10">
            <slot name="footer" :usefulLinks="usefulLinks" class="flex flex-row justify-around">
            </slot>
        </div>
    </div>
</template>

<script>
export default {
     data() {
    return {
      usefulLinks:['a','b']
    }
  } 
}

</script>