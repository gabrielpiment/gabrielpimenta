<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()

const isOpen = ref(false)
const el = useTemplateRef('el')
const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <!-- Mobile Menu Hamburger -->
  <div class="fixed top-4 left-4 sm:hidden z-20">
    <UButton
      icon="i-lucide-menu"
      color="neutral"
      variant="ghost"
      size="lg"
      @click="isOpen = !isOpen"
    />
  </div>

  <!-- Desktop Navigation -->
  <div class="hidden sm:flex fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10 sm:max-w-full">
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

  <!-- Mobile Sliding Menu -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="-translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="-translate-x-full opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-10 sm:hidden"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-sm"
          @click="isOpen = false"
        />

        <!-- Menu Panel -->
        <div class="absolute left-0 top-0 h-full w-64 bg-background border-r border-default shadow-lg flex flex-col pt-20">
          <nav class="flex flex-col gap-2 px-4 flex-1">
            <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="px-4 py-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
              @click="isOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <!-- Color Mode Button in Mobile Menu -->
          <div class="border-t border-default p-4">
            <ColorModeButton />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
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
