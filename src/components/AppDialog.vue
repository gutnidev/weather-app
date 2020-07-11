<template>
  <div
    class="popup-body"
    :class="{ 'open': isDialog.dialogStatus }"
    @click="setDialogStatus(false)"
  >
    <p class="popup-text">
        {{ isDialog.dialogMessage }}
    </p>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppDialog',
  methods: {
    ...mapActions(['setDialogStatus']),
  },
  computed: {
    ...mapGetters(['isDialog']),
  },
};
</script>

<style lang="scss" scoped>
  .popup-body{
    position: fixed;
    background-color: white;
    text-align: center;
    margin: 1rem;
    z-index: 2000;
    padding: 1.2rem;
    border-radius: 10px;
    top: 0;
    right: 50%;
    transform: translate(50%, -30vh);
    transition: all 0.5s;
    cursor: pointer;
    min-width: 60%;
  }
  .open{
    transform: translate(50%, 0);
  }
</style>
