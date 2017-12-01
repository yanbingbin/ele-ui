<template>
  <div id="app">
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>
</template>

<script>
  import { provinceAndCityDataPlus } from 'element-china-area-data'
  export default {
    data () {
      return {
        options: provinceAndCityDataPlus,
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