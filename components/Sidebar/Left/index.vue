<script setup>
const { defaultTransition } = useTailwindConfig()
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>
    <div class="mt-2 space-y-3">
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="mdi:home" size="30" />
        </template>
        <template #name>
          Home
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="line-md:hash" size="30" />
        </template>
        <template #name>
          Explore
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="ic:outline-notifications" size="30" />
        </template>
        <template #name>
          Notifications
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="ic:outline-message" size="30" />
        </template>
        <template #name>
          Messages
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="ic:round-bookmark-border" size="30" />
        </template>
        <template #name>
          Bookmarks
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="material-symbols:featured-play-list-outline" size="30" />
        </template>
        <template #name>
          Lists
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="ic:baseline-person-outline" size="30" />
        </template>
        <template #name>
          Profile
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <Icon name="fluent:more-circle-24-regular" size="30" />
        </template>
        <template #name>
          More
        </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<style scoped>

</style>
