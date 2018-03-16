<template>
  <div>
    <img src="/static/img/logo.png" >
    <welcome-message name="World" />
  </div>
</template>

<script>
import WelcomeMessage from 'components/Home/WelcomeMessage'

export default {
  components: {
    WelcomeMessage
  }
}
</script>
