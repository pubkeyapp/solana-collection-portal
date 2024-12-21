import { UiContainer } from '@pubkey-ui/core'
import { useGetCollections } from './data-access'
import { CollectionUiGrid } from './ui/collection-ui-grid'

export default function CollectionGridFeature() {
  const { items } = useGetCollections()
  return (
    <UiContainer>
      <CollectionUiGrid collections={items} />
    </UiContainer>
  )
}
