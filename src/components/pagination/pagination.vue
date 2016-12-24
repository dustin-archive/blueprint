<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div class='pagination'>
    <div class='button -flex _touchable' v-on:click='to(1)'>First</div>
    <div class='button -flex _touchable' v-on:click='prev(1)' v-bind:class='dim(1)'>Prev</div>
    <div class='button -flex _touchable' v-on:click='prev(2)' v-bind:class='hide_prev(2)'>{{ number - 2 }}</div>
    <div class='button -flex _touchable' v-on:click='prev(1)' v-bind:class='hide_prev(1)'>{{ number - 1 }}</div>
    <div class='button -flex _touchable'>{{ number }}</div>
    <div class='button -flex _touchable' v-on:click='next(1)' v-bind:class='hide_next(1)'>{{ number + 1 }}</div>
    <div class='button -flex _touchable' v-on:click='next(2)' v-bind:class='hide_next(2)'>{{ number + 2 }}</div>
    <div class='button -flex _touchable' v-on:click='next(1)' v-bind:class='dim(last)'>Next</div>
    <div class='button -flex _touchable' v-on:click='to(last)'>Last</div>
  </div>
</template>
