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
          }
      )
    } else if (v.children.length > 1) {
      let item = {
        label: v.meta.title,
        icon: v.meta.icon,
      }, itemChild = []

      const c = v.children
      c.forEach((vc) => {
        itemChild.push(
            {
              route: v.path + '/' + vc.path,
              label: vc.meta.title,
              icon: vc.meta.icon,
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
  <div class="card">
    <Menubar :model="items" breakpoint="300px">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <Icon :icon="item.icon"/>
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <Icon :icon="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2"/>
        </a>
      </template>
    </Menubar>
  </div>
</template>

<style scoped>

</style>