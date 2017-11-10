<template>
    <div class="layout-row">
        <Row class="layout-row">
             <div>
                <Upload
                    :before-upload="handleUpload"
                    action="//"
                    :format="['xls','xlsx']" 
                    :onFormatError="formatCheck">
                    <Button type="ghost" icon="ios-cloud-upload-outline">选择文件上传</Button><div v-if="file !== null">Upload file: {{ file.name }} </div>
                </Upload>
                
                <Button type="primary" @click="upload" :loading="loadingStatus" :disabled="file === null">{{ loadingStatus ? '上传中' : '点击上传' }}</Button>
            </div>
        </Row>
    </div>
</template>
<style lang="less" scoped>
.layout-row {
  height: 100%;
}
@height: 100%;
.layout-content-main {
  padding: 10px;
  height: @height;
  .layout-content-main-base {
    height: @height;
    border: 1px dashed #ddd;
    padding: 2px;
  }
  .layout-content-main-left {
    .layout-content-main-base;
  }
  .layout-content-main-right {
    .layout-content-main-base;
  }
}
</style>

<script>
export default {
  data() {
      return {
          file: null,
          loadingStatus: false
      }
  },
  components: {
  },
  methods:{
    formatCheck(file,fileList){
        console.log(file)
        this.$Notice.error({
            title:'文件类型错误',
            desc:'请使用正确的文件类型'
        })
    },
    handleUpload (file) {
        console.log(file)
        this.file = file;
        return false;
    },
    upload () {
        this.loadingStatus = true;
        setTimeout(() => {
            this.file = null;
            this.loadingStatus = false;
            this.$Message.success('Success')
        }, 1500);
    }
  }
}
</script>