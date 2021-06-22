import Vue from "vue";

declare class Slick extends Vue {
    next(): void;
    prev(): void;
    play(): void;
    pause(): void;
    reSlick(): void;
    goTo(index: number): void;
}

export default Slick;
