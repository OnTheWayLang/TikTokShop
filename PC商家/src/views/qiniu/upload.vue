<template>
  <el-upload :before-upload="beforeUpload" :data="dataObj" :multiple="true" action="https://upload.qbox.me" drag>
    <i class="el-icon-upload"/>
    <div class="el-upload__text">{{ $t('将文件拖到此处') }}，或<em>{{ $t('点击上传') }}</em></div>
  </el-upload>
</template>

<script>
import {getToken} from '@/api/qiniu'
// 获取七牛token 后端通过Access Key,Secret Key,bucket等生成token
// 七牛官方sdk https://developer.qiniu.com/sdk#official-sdk

export default {
  data() {
    return {
      dataObj: {token: '', key: ''},
      image_uri: [],
      fileList: []
    }
  },
  methods: {
    beforeUpload() {
      const _self = this
      return new Promise((resolve, reject) => {
        getToken().then(response => {
          const key = response.data.qiniu_key
          const token = response.data.qiniu_token
          _self._data.dataObj.token = token
          _self._data.dataObj.key = key
          resolve(true)
        }).catch(err => {
          console.log(err)
          reject(false)
        })
      })
    }
  }
}
</script>
