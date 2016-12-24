<style src='style.scss' lang='scss'></style>
<script src='compare-modal.js'></script>
<template>
  <div>
    <div class='compare-grid _dashed'>
      <div class='compare-item -modal' v-for='id in queue'>
        <check v-bind:id='id'>{{ id }}</check>
      </div>
    </div>
    <div class='compare-ribbon'>
      <div>
        <div class='button _touchable' v-on:click='clear(), close()'>Clear</div>
      </div>
      <div>
        <div class='button _touchable' v-on:click='close()'>Close</div>
      </div>
    </div>
  </div>
</template>
