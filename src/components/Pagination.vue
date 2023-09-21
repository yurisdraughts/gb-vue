<template>
  <div
    class="pagination"
    v-if="pageNumbers.length !== 0 && pageNumbers.length !== 1"
  >
    <a
      href="#"
      class="pagination__link text"
      v-for="pageNumber in pageNumbers"
      :key="pageNumber"
      @click.prevent="setStartingIndex(pageNumber)"
    >
      <RoundButton
        :variant="pageNumber === currentPage ? 'small' : 'pagination'"
        :is-empty="true"
      />
      <div class="pagination__text">
        {{ String(pageNumber + 1).padStart(2, "0") }}
      </div>
    </a>
    <a
      v-if="currentPage !== pageNumbers.length - 1"
      href="#"
      @click.prevent="setStartingIndex(pageNumbers.length - 1)"
    >
      <RoundButton
        :variant="
          currentPage === pageNumbers.length - 1 ? 'small' : 'pagination'
        "
      />
    </a>
  </div>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
  name: "PaginationElement",
  props: [
    "numberOfItems",
    "numberOfItemsShown",
    "currentPage",
    "setStartingIndex",
  ],
  components: {
    RoundButton,
  },
  computed: {
    pageNumbers() {
      return Array.from(
        {
          length: Math.ceil(this.numberOfItems / this.numberOfItemsShown),
        },
        (_, i) => i
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  margin: pxToVw(51) auto 0;
  width: fit-content;

  &__link {
    @include transition(color);
    position: relative;
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: $accent-color;
    }
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
}
</style>
