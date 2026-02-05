import * as Alpine from "alpinejs";

interface Card
{
  title: string;
  date: string;
  projectLength: number;
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
    activeCards: [] as Card[],
    expanded: null as number | null,
    expandedCard: null as Card | null,
    defaultCard: null as Card,
    isAscending: null as Boolean,
    sortBy: null as number,
    tags: null as Set<string>,
    activeTags: null as Set<string>,
    cardSize: null as number | null,
    columns: null as number | null,
    minColumns: null as number | null,

    async loadCards()
    {
      console.log("load");
      const res = await fetch("./../../public/cards.json");
      const cards = await res.json();
      this.cards = cards.cards;
      this.defaultCard = this.cards[0];
      this.isAscending = true;
      this.sortBy = 0; // 0 - date, 1 - name, 2 - length
      this.tags = new Set<string>;
      this.activeTags = new Set<string>;
      this.minColumns = 1;
      for (const card of this.cards)
      {
        for (const tag of card.category)
        {
          this.tags.add(tag);
        }
      }

      this.reloadCards();

      await this.$nextTick();
      this.resize();
    },

    resize()
    {
      const container = document.getElementById('card-container');
      if (!container) return;

      const gapValue = getComputedStyle(container.querySelector('.grid')).gap;
      const gap = parseFloat(gapValue) || 0;
      const maxCardWidth = 320;       // desired max width per card
      const minCardWidth = 180;       // don’t shrink smaller than this

      const totalWidth = container.clientWidth;

      // ✅ Start by estimating columns
      let cols = Math.floor((totalWidth + gap) / (maxCardWidth + gap));
      cols = Math.max(cols, 1);

      // ✅ Compute width that fits this column count
      let cardWidth = (totalWidth - (cols - 1) * gap) / cols;
      console.log(totalWidth);
      console.log(cardWidth);

      // ✅ Reduce columns if too small
      while (cardWidth < minCardWidth && cols > 1) {
        cols--;
        cardWidth = (totalWidth - (cols - 1) * gap) / cols;
      }

      // ✅ Only add columns if we *still* have leftover space after filling current cols at max width
      while (
        cols < 8 && // prevent runaway columns on ultrawide
        (cols + 1) * (maxCardWidth + gap) <= totalWidth
      ) {
        cols++;
        cardWidth = (totalWidth - (cols - 1) * gap) / cols;
      }

      // ✅ Clamp to min/max to keep scaling smooth
      cardWidth = Math.min(Math.max(cardWidth, minCardWidth), maxCardWidth);

      this.columns = cols;
      this.cardSize = cardWidth;

      //console.log(`cols: ${cols}, cardWidth: ${cardWidth.toFixed(2)}`);
    },

    sortByDate()
    {
      if (this.isAscending)
      {
        this.activeCards.sort((a: any, b: any) => this.parseDate(a.date) - this.parseDate(b.date));
      }
      else
      {
        this.activeCards.sort((a: any, b: any) => this.parseDate(b.date) - this.parseDate(a.date));
      }
      this.sortBy = 0;
    },

    sortByName()
    {
      if (this.isAscending)
      {
        this.activeCards.sort((a: any, b: any) => a.title.localeCompare(b.title));
      }
      else
      {
        this.activeCards.sort((a: any, b: any) => b.title.localeCompare(a.title));
      }
      this.sortBy = 1;
    },

    sortByLength()
    {
      if (this.isAscending)
      {
        this.activeCards.sort((a: any, b: any) => a.projectLength - b.projectLength);
      }
      else
      {
        this.activeCards.sort((a: any, b: any) => b.projectLength - a.projectLength);
      }
      this.sortBy = 2;
    },

    toggleAsc()
    {
      this.isAscending = !this.isAscending;
      switch (this.sortBy)
      {
        case 0:
          this.sortByDate();
          break;
        case 1:
          this.sortByName();
          break;
        case 2:
          this.sortByLength();
          break;
      }
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
    },

    parseDate(dateStr: string)
    {
      // Expecting format "MMYY"
      if (dateStr.length !== 4) return 0;
      const month = parseInt(dateStr.slice(0, 2));
      const year = 2000 + parseInt(dateStr.slice(2, 4)); // e.g., "24" → 2024
      return new Date(year, month - 1).getTime(); // Convert to timestamp
    },

    reloadCards()
    {
      this.activeCards.length = 0;
      for (const card of this.cards)
      {
        if (this.cardInActiveTags(card))
        {
          this.activeCards.push(card);
        }
      }
    },

    getActiveTag(tag: string): boolean
    {
      return this.activeTags.has(tag);
    },

    setActiveTag(tag: string): void
    {
      if (!this.activeTags.has(tag))
      {
        this.activeTags.add(tag);
      }
      else
      {
        this.activeTags.delete(tag);
      }
      this.reloadCards();
    },

    isActiveTagsEmpty(): boolean
    {
      return (this.activeTags.size === 0);
    },

    cardInActiveTags(card: any): boolean
    {
      if (this.isActiveTagsEmpty())
      {
        return true;
      }
      
      for (const tag of card.category)
      {
        if (this.activeTags.has(tag))
        {
          return true;
        }
      }
      return false;
    },
  };
}

(window as any).cardGrid = cardGrid;