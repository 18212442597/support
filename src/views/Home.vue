<template>
  <div class="home">
    <top/>
    <information/>
    <operation/>
    <result/>
  </div>
</template>

<script>
// @ is an alias to /src
import top from '../components/top'
import information from '../components/information'
import operation from '../components/operation'
import result from '../components/result'

export default {
  name: 'Home',
  components: {
    top,information,operation,result,
  }
}
</script>
<style  scoped>

</style>
