<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const items = computed(() => {
  return props.page.faq?.categories.map((faq: any) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions
    }
  })
})

const allQuestions = computed(() => {
  return props.page.faq?.categories.flatMap((category: any) => {
    return category.questions.map((q: any) => ({
      ...q,
      category: category.title
    }))
  })
})

const ui = {
  wrapper: 'flex flex-col lg:flex-row gap-4 sm:gap-8 w-full',
  list: 'w-full lg:w-1/3 flex-col bg-transparent dark:bg-transparent gap-2 px-0 relative',
  indicator: 'absolute duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
  trigger: 'px-4 py-3 text-left w-full justify-start rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted text-base font-medium',
  label: 'truncate'
}
</script>

<template>
  <UPageSection
    :title="page.faq.title"
    :description="page.faq.description"
    :ui="{
      container: 'px-0 !pt-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <!-- Desktop: Tabs com conteúdo lateral -->
    <div class="hidden lg:block">
      <UTabs
        :items
        orientation="vertical"
        :ui
      >
        <template #content="{ item }">
          <UAccordion
            trailing-icon="lucide:plus"
            :items="item.questions"
            :unmount-on-hide="false"
            :ui="{
              item: 'border-none',
              trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-base',
              trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-base text-muted'
            }"
          >
            <template #body="{ item: _item }">
              <MDC
                :value="_item.content || ''"
                unwrap="p"
                class="px-4 text-sm overflow-auto"
              />
            </template>
          </UAccordion>
        </template>
      </UTabs>
    </div>

    <!-- Mobile: Accordion simples com todas as categorias -->
    <div class="block lg:hidden w-full">
      <UAccordion
        trailing-icon="lucide:plus"
        :items="allQuestions"
        :unmount-on-hide="false"
        :ui="{
          item: 'border-none',
          trigger: 'mb-2 border-0 group px-3 py-2 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-sm sm:text-base',
          trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-base text-muted'
        }"
      >
        <template #label="{ item: _item }">
          <div class="flex flex-col gap-0.5 flex-1 min-w-0">
            <span class="font-medium truncate">{{ _item.label }}</span>
            <span class="text-xs text-muted">{{ _item.category }}</span>
          </div>
        </template>
        <template #body="{ item: _item }">
          <MDC
            :value="_item.content || ''"
            unwrap="p"
            class="px-3 text-sm overflow-auto"
          />
        </template>
      </UAccordion>
    </div>
  </UPageSection>
</template>
