<template>
    <div class="layout-row">
        <Row className="layout-row">
             <Row style="width:100%">
                <Upload
                    :before-upload="handleUpload"
                    action="//"
                    :format="format" 
                    :onFormatError="formatCheck">
                    <Row type="flex" justify="center" align="middle">
                      <span>导入对账表：</span><Button type="ghost" icon="ios-cloud-upload-outline">选择文件上传</Button><span v-if="file !== null">文件名称: {{ file.name }} </span><span>支持的文件类型： xls/xlsx</span>
                    </Row>
                </Upload>
                <Row>数据要求：账单年（文本）、账单月（文本）</Row>
                <Button type="primary" @click="upload" :loading="loadingStatus" :disabled="file === null">{{ loadingStatus ? '上传中' : '确认导入' }}</Button>
            </Row>
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
          loadingStatus: false,
          format:['xls','xlsx']
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
        // console.log(file)
        const _file_format = file.name.split('.').pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
        if (!checked) {
          this.$Notice.error({
            title:'文件类型错误',
            desc:'请使用正确的文件类型,xls/xlsx'
          })
          return false;
        }
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