<template>
  <Card class="h-full">
    <template #title>KeyCode信息</template>
    <template #subtitle>请按下键盘任意键来显示该按键的信息</template>
    <template #content>
      <div
          class="flex flex-row justify-center items-center gap-4
          border-2 border-dashed border-surface-200
          dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950
          flex-auto font-medium mt-3"
      >
        <div class="show-keycode py-12">
          <div class="key-info text-3xl align-center" v-show="keyInfo.key!==''">当前按键: {{ keyInfo.key}}</div>
          <span class="key-info-tooltip">请按下键盘任意键</span>
        </div>
      </div>
      <div
          class="flex justify-center items-center gap-4 flex-col
          dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950
          font-medium mt-3"
      >
        <div v-for="item in keyInfoShow" :key="item.key">
          <InputGroup>
            <InputGroupAddon class="w-40 justify-between">
              <span>{{ item.key }}</span> <i v-tooltip.top="item.tooltip" class="pi pi-info-circle"></i>
            </InputGroupAddon>
            <InputText :key="item.key" v-model="keyInfo[item.key]"/>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupAddon>.00</InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

const keyInfo = ref({
  key: '',
  keyCode: '',
  code: '',
  altKey: '',
  ctrlKey: '',
  shiftKey: '',
  metaKey: ''
})
const keyInfoShow = [
  {
    key: 'key',
    tooltip: '返回一个字符串，表示事件所代表的键的键值。',
  }, {
    key: 'keyCode',
    tooltip: '返回一个数字，该数字代表一个与系统和执行相关的数字代码，用于标识按下按键的未修改值。(过时属性)',
  }, {
    key: 'code',
    tooltip: '返回一个字符串，其中包含事件所代表的物理按键的代码值。',
  }, {
    key: 'ctrlKey',
    tooltip: '返回一个字符串，表示事件所代表的键的键值。',
  }, {
    key: 'shiftKey',
    tooltip: '返回一个布尔值，如果按键事件发生时 Shift 键处于活动状态，则该值为 true',
  }, {
    key: 'altKey',
    tooltip: '返回一个布尔值，如果按键事件发生时 Alt（macOS 中为 Option 或 ⌥）键处于活动状态，则该值为 true',
  }, {
    key: 'metaKey',
    tooltip: '返回一个布尔值，如果键事件发生时 Meta（在 Mac 键盘上为 ⌘ Command ；在 Windows 键盘上为 Windows 键（🪟））键处于活动状态，则该值为 true。',
  }
]
onMounted(() => {
  window.addEventListener('keydown', getKeyInfo)
})
const getKeyInfo = (event) => {
  console.log(event)
  event.preventDefault();
  keyInfo.value = {
    key: event.key,
    keyCode: event.keyCode, // 注意：keyCode 已被弃用，推荐使用 code
    code: event.code,
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    metaKey: event.metaKey
  };
}
onBeforeUnmount(() => {
  window.removeEventListener('keydown', getKeyInfo)
})

</script>
