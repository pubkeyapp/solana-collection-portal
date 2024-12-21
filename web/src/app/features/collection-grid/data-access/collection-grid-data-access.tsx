import { collections } from '@/collections'

export function useGetCollections() {
  return {
    items: collections,
  }
}
