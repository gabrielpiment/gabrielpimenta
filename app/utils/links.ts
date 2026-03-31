import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Início',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Projetos',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Sites',
  icon: 'i-lucide-layout-template',
  to: '/sites'
}, {
  label: 'Blog',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'Palestras',
  icon: 'i-lucide-mic',
  to: '/speaking'
}, {
  label: 'Sobre Mim',
  icon: 'i-lucide-user',
  to: '/about'
}]
