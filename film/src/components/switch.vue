<template>
    <div>
        <div class="box" :class="addClassOn ? 'on' : ''" @click="updateState">
            <div class="ball">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        isOn:{
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            addClassOn:this.isOn
        }
    },
    methods: {
        updateState(){
            this.addClassOn = !this.addClassOn;
            this.$emit('update:isOn',  this.addClassOn)
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    width: 43px;
    height: 26px;
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: 12px;
    transition: .3s ease-in;
    // border: 1px solid #979797;
    // box-shadow: 0 0 5px #000; 
    .ball{
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 100%;
        box-shadow: 0 0 5px #000; 
        transition: .3s ease-in;
    }
}
.on{
     background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
     justify-content: flex-end;
     box-shadow:none;
     border: none;
     .ball{
         background: #fff;
        //  width: 26px;
        //  height: 26px;
     }
}
</style>


