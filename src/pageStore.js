import { atom } from "nanostores";

export const selectedPage = atom(1);

export function setPage(i) {
    selectedPage.set(i);
}