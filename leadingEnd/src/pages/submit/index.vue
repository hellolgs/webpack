<template>
    <div class="bc-text">
        <div class="top">
            <CommonHeader></CommonHeader>
        </div>  
        <div class="button">
            <Left></Left>  
            <Submitdata></Submitdata> 
        </div>      
    </div>
</template>
<script>
import CommonHeader from "../../components/header/index.vue";
import Left from "../../components/left/index.vue";
import Submitdata from "../../components/submitdata/index.vue";
import './style.scss'
export default {
    name:'Submit',
    components:{
        CommonHeader,
        Left,
        Submitdata
    }
}
</script>
