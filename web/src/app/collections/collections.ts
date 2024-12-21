export interface Collection {
  id: string
  name: string
  imageUrl: string
  price: string
  currency: string
}

export const collections: Collection[] = [
  {
    id: 'collection-1',
    name: 'Collection 1',
    imageUrl: 'https://images.unsplash.com/photo-1734597949864-0ee6637b0c3f?q=80&w=1024',
    price: '0.5',
    currency: 'SOL',
  },
  {
    id: 'collection-2',
    name: 'Collection 2',
    imageUrl: 'https://images.unsplash.com/photo-1668365187350-05c997d09eba?q=80&w=1024',
    price: '1.0',
    currency: 'SOL',
  },
  {
    id: 'collection-3',
    name: 'Collection 3',
    imageUrl: 'https://images.unsplash.com/photo-1733130856136-8b684753bbfe?q=80&w=1024',
    price: '1.5',
    currency: 'SOL',
  },
]
