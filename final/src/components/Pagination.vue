<template>
  <div class="pagination">
    <a
      href="#"
      class="pagination__link text"
      v-for="pageNumber in pageNumbers"
      :key="pageNumber"
      @click.prevent="setStart(pageNumber)"
    >
      <RoundButton
        :variant="pageNumber === currentPage ? 'small' : 'pagination'"
        :empty="true"
      />
      <div class="pagination__text">
        {{ String(pageNumber + 1).padStart(2, "0") }}
      </div>
    </a>
    <a
      v-if="pageNumbers.length !== 1 && currentPage !== pageNumbers.length - 1 && pageNumbers.length !== 0"
      href="#"
      @click.prevent="setStart(pageNumbers.length - 1)"
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
  props: ["numberOfItems", "numberOfPagesShown", "currentPage", "setStart"],
  components: {
    RoundButton,
  },
  computed: {
    pageNumbers() {
      return Array.from(
        {
          length: Math.ceil(this.numberOfItems / this.numberOfPagesShown),
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
