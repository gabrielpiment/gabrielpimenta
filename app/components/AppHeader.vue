<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()

const el = useTemplateRef('el')
const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10 w-[95vw] sm:max-w-full px-2 sm:px-0">
    <div ref="el" class="overflow-x-auto whitespace-nowrap hide-scrollbar rounded-full" :style="style">
      <UNavigationMenu
        :items="links"
        variant="link"
        color="neutral"
        class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5 min-w-max w-max inline-flex"
        :ui="{
          link: 'px-2 py-1',
          linkLeadingIcon: 'hidden',
          root: 'w-max'
        }"
      >
        <template #list-trailing>
          <ColorModeButton />
        </template>
      </UNavigationMenu>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE e Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
