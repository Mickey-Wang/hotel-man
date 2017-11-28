<style lang="less" scoped>
    #infoDiv {
        width: 400px;
        height: 400px;
        overflow-y: auto;
    }
</style>
<template>
    <Row>
        <Col span="8">
            <Row>
                <Col span="24">
                    <span>酒店名称：</span><span>桔子水晶酒店（安贞店）</span>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <span>酒店地址：</span><span>北京朝阳区建国门外永安里中街25号</span>
                </Col>
            </Row>
            <Row>
                <Form :model="searchForm" :label-width="60" style="text-align: left;">
                    <FormItem label="关键词：" prop="keyword" >
                        <Row>
                            <Col span="18" style="padding-right: 10px;">
                                <Input v-model="searchForm.keyword"></Input>
                            </Col>
                            <Col span="6">
                                <Button type="primary" @click="searchHandle">搜索</Button>
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </Row>
            <div id="infoDiv"></div>
        </Col>
        <Col span="16">
            <div><Button type="primary" @click="newMarketr">人工标记</Button></div>
            <div id="tMap" :style="{minWidth: width, minHeight: height}"></div>
        </Col>
    </Row>
</template>
<script>
  import { TMap } from '../../../libs/TMap'
  export default {
    props: {
        width: {
            type: String,
            default: '600px'
        },
        height: {
            type: String,
            default: '500px'
        }
    },
    data () {
      return {
        searchService: null,
        region: '',
        canMarker: false,
        searchForm: {
            keyword: ''
        }
      }
    },
    mounted () {
        var _this = this;
        TMap('UVQBZ-OXSCQ-MQM5I-GP2P2-HT2SV-44F2I').then(qq => {
            this.region = new qq.maps.LatLng(39.916527, 116.397128);
            var markers = [];
            var map = new qq.maps.Map(document.getElementById("tMap"), {
                // 地图的中心地理坐标。
                center: this.region,
                zoom: 13
            });
             //调用Poi检索类
            this.searchService = new qq.maps.SearchService({
                panel: document.getElementById('infoDiv'),
                map: map,
                // complete : function (results) {
                //     // 设置回调函数参数
                //     var pois = results.detail.pois;
                //     var infoWin = new qq.maps.InfoWindow({
                //         map: map
                //     });
                //     var latlngBounds = new qq.maps.LatLngBounds();
                //     for(var i = 0,l = pois.length;i < l; i++){
                //         var poi = pois[i];
                //         // 扩展边界范围，用来包含搜索到的Poi点
                //         latlngBounds.extend(poi.latLng);
                //         (function(n) {
                //             var marker = new qq.maps.Marker({
                //                 map: map
                //             });
                //             marker.setPosition(pois[n].latLng);

                //             marker.setTitle(i + 1);
                //             markers.push(marker);


                //             qq.maps.event.addListener(marker, 'click', function(event) {
                //                 infoWin.open();
                //                 infoWin.setContent('<div style="width:280px;height:100px;">' + 'POI的ID为：' +
                //                     pois[n].id + 
                //                     '，经度：' + event.latLng.getLat() +
                //                     '，POI的名称为：' + pois[n].name + 
                //                     '，POI的地址为：' + pois[n].address + 
                //                     '，POI的类型为：' + pois[n].type + '</div>');
                //                 infoWin.setPosition(pois[n].latLng);
                //             });
                //         })(i);
                //     }
                //     map.fitBounds(latlngBounds);
                // }
            });
            //添加监听事件  获取鼠标点击事件
            qq.maps.event.addListener(map, 'click', function(event) {
                if (_this.canMarker) {
                    var marker = new qq.maps.Marker({
                        position: event.latLng, 
                        map: map
                    });
                    _this.canMarker = false;
                }
            });
        })
    },
    methods: {
        searchHandle () {
            this.searchKeyword();
        },
        searchKeyword () {
            this.searchService.setLocation('北京');
            this.searchService.setPageCapacity(5);
            this.searchService.search(this.searchForm.keyword);
            // this.searchService.searchNearBy(this.searchForm.keyword, this.region, 2000); // 根据中心点坐标、半径和关键字进行周边检索。
        },
        newMarketr () {
            this.canMarker = true;
        }
    }
  }
</script>