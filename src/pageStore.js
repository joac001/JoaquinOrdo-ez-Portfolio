import { atom } from "nanostores";

export const selectedPage = atom(0);

export function setPage(i) {
    selectedPage.set(i);
}
