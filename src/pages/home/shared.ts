type Component = Readonly<{
  id: string;
  title: string;
  subtitle: string;
  image: string;
}>;

export const COMPONENTS: Component[] = [
  {
    id: 'card',
    title: 'Card',
    subtitle: 'Reusable card component',
    image: 'https://picsum.photos/500/250',
  },
];
