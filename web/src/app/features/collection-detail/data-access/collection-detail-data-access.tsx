import { useGetCollections } from '@/features/collection-grid/data-access'
import { useMemo } from 'react'

export function useCollectionDetail({ collectionId }: { collectionId: string }) {
  const { items } = useGetCollections()

  const item = useMemo(() => items.find((item) => item.id === collectionId), [collectionId, items])

  return {
    loading: !item,
    item,
  }
}
