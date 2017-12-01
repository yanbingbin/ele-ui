
<template>
  <div id="app1">
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>
</template>

<script>
  import { regionDataPlus } from 'element-china-area-data'
  export default {
    data () {
      return {
        options: regionDataPlus,
        selectedOptions: []
      }
    },

    methods: {
      handleChange (value) {
        console.log(value)
      }
    }
  }
</script>