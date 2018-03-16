<template>
  <h3>Hello {{ name }}</h3>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
