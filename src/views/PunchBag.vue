<template>
  <div>
    <div>
        <div id="bag" v-bind:class="{brust : ended}">
             <!-- <img v-if="ended" src="../assets/" alt="punch"> -->
             <img v-if="ended" src="../assets/bag-burst.png" alt="punch" />
            <img @click="punch" v-else src="../assets/bag.png" alt="punch Image">
           
        </div>
        <div id="bag-health" >
            <div v-bind:style="{width : health + '%'}"></div>
        </div>
        <div id="controls">
            <!-- <button  v-show="!ended" >Punch</button> -->
            <button @click="restart">Restart</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data()
    {
        return{
        
        health:100,
        ended:false,
        }
    },
    methods:{
        punch()
        {
            this.health -= 10;
            if (this.health <=0 ) {
            this.ended = true
            }
            
        },
        restart()
        {
            this.health = 100;
            this.ended = false;
        }

    }
}
</script>

<style scoped src="../assets/css/style.css"></style>