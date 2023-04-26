<template>
  <div>Empty</div>
</template>

<script lang="ts">
import { h } from "vue"
export default {
  props: ["greeting", "who"],
  setup(props) {
    const hasValue = props.greeting && props.who
    // console.log(hasValue)
    return () =>
      hasValue ? h("div", `${props.greeting} ${props.who}`) : h("div", { style: { color: "red" } }, "There is not enough information to display")

  },
}
</script>