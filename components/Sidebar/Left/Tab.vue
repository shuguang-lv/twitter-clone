<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
const { defaultTransition } = useTailwindConfig()
const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')
</script>

<template>
  <nuxt-link to="#" class="flex p-3 rounded-full text-black w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white" :class="defaultTransition">
    <div class="w-6 h-6 text-dark">
      <slot name="icon" />
    </div>
    <div class="hidden xl:block ml-4 text-xl" :class="textClasses">
      <slot name="name" />
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>
