<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div>
    <div class='compare-grid _dashed'>
      <div class='compare-item' v-for='id in queue'>
        <check v-bind:id='id'>{{ id }}</check>
      </div>
    </div>
    <div class='compare-ribbon'>
      <div>
        <div class='button _touchable' v-on:click='clear()'>Clear</div>
        <div class='button _touchable' v-on:click='compare()'>Compare</div>
      </div>
    </div>
  </div>
</template>
