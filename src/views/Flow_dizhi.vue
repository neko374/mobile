<template>
  <div>
      <van-row>
<van-nav-bar
  title="请填写收货地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
      </van-row>
      <van-row>
<van-address-edit
  :area-list="areaList"

  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
 
  @change-detail="onChangeDetail"
/>
      </van-row>
  </div>
</template>

<script>
import { AddressEdit} from 'vant';
export default {
    components:{
        [AddressEdit.name]: AddressEdit,

    },
      data() {
    return {
      areaList:{},
      searchResult: [],
    };
  },
  methods: {
        onClickLeft() {
      Toast('返回');
    },
    //    onSave() {
    //   Toast('save');
    // },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
}
</script>

<style lang="less" scoped>

</style>>