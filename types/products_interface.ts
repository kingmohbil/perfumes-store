export default interface ProductInterface {
  id: string;
  name: string;
  price: number;
  image?: string;
  category: string;
  description: string;
  rating: number;
  link?: string;
}
