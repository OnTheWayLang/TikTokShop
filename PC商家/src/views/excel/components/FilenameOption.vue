<template>
  <div style="display:inline-block;">
    <label class="radio-label" style="padding-left:0;">{{ $t('Filename') }}: </label>
    <el-input v-model="filename" placeholder="Please enter the file name (default excel-list)"
              prefix-icon="el-icon-document"
              style="width:345px;"/>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    filename: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
