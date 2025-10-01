import * as Alpine from "alpinejs";

interface Card
{
  title: string;
  shortDescription: string;
  thumbnail: string;
  description0: string;
  description1: string;
  category: string[];
  media: string[];
}

export function cardGrid()
{
  return {
    cards: [] as Card[],
    expanded: null as number | null,
    expandedCard: null as Card | null,
    defaultCard: null as Card,

    async loadCards()
    {
      console.log("load");
      const res = await fetch("./../../public/cards.json");
      const cards = await res.json();
      this.cards = cards.cards;
      this.defaultCard = this.cards[0];
    },

    toggleExpand(i: number | null)
    {
      this.expanded = this.expanded === i ? null : i;
    },

    setExpanded(e: Card | null)
    {
      if (!e)
      {
        this.expandedCard = this.defaultCard;
      }
      else
      {
        this.expandedCard = e;
      }
    }
  };
}

(window as any).cardGrid = cardGrid;