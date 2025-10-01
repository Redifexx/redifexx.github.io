interface Card {
    title: string;
    shortDescription: string;
    thumbnail: string;
    description0: string;
    description1: string;
    category: string[];
    media: string[];
}
export declare function cardGrid(): {
    cards: Card[];
    expanded: number | null;
    expandedCard: Card | null;
    defaultCard: Card;
    loadCards(): Promise<void>;
    toggleExpand(i: number | null): void;
    setExpanded(e: Card | null): void;
};
export {};
