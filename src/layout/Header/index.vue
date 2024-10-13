<script setup>
import {ref} from "vue";
import {useRouter} from 'vue-router';
import {Icon} from '@iconify/vue';

const router = useRouter();
const items = ref([])

console.log(router.options.routes);
router.options.routes.forEach((v) => {
  if (v.children) {
    if (v.children.length === 1) {
      items.value.push(
          {
            route: '/' + v.children[0].path,
            label: v.children[0].meta.title,
            icon: v.children[0].meta.icon,
            class: v.children[0].meta.class,
          }
      )
    } else if (v.children.length > 1) {
      let item = {
        label: v.meta.title,
        icon: v.meta.icon,
        class: v.meta.class,
      }, itemChild = []

      const c = v.children
      c.forEach((vc) => {
        itemChild.push(
            {
              route: v.path + '/' + vc.path,
              label: vc.meta.title,
              icon: vc.meta.icon,
              class: vc.meta.class,
            }
        )
      })
      items.value.push(
          {
            ...item, items: itemChild
          }
      )
    }
  }
})
console.log(items.value);
</script>

<template>
  <Menubar :model="items" breakpoint="500px" class="c_menubar">
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate" aria-hidden="false">
          <Icon :icon="item.icon" :class="item?.class"/>
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action" aria-hidden="false">
        <Icon :icon="item.icon" :class="item?.class"/>
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down"/>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
.c_menubar :deep(.p-menubar-submenu) {
  z-index: 10;
}
</style>