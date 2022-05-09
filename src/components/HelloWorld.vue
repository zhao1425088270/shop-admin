
<!-- <script  lang="ts">
import { ref, defineComponent, PropType, onMounted } from 'vue'

interface User{
  name:string
  age:number
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    },
    obj: {
      type: Object as PropType<User>,
      de3fault: () => {}
    }
  },
  setup: (props) => {
    console.log(props.obj?.name)
    const count = ref(0)
    const foo = ref<{
      a:Number
      b:String
    }| null>(null)
    foo.value = {
      a: 1,
      b: 'hello'
    }

    onMounted(() => {
      console.log(foo.value)
    })
    const title = ref<HTMLHeadElement | null>(null)
    return {
      count,
      title
    }
  }
})
</script> -->

<template>
<h1>hellow hhfajdhf</h1>
  <h1 ref="title">{{ props.msg }}</h1>
  <p>count is: {{ count }}</p>
 <button @click="increment">加</button>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
const count = ref(100)

// 获取父级数据
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['increment'])

// 按钮
const increment = () => {
  console.log(props.msg)
  count.value++
  emit('increment')
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
