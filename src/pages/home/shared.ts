type Component = Readonly<{
  id: string;
  name: string;
  image: string;
}>;

export const COMPONENTS: Component[] = [
  {
    id: 'card',
    name: 'Card',
    image: 'https://picsum.photos/500/250',
  },
];
