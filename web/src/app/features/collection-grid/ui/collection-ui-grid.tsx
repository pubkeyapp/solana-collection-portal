import { Collection } from '@/collections'
import { Anchor, AspectRatio, Button, Card, Group, Image, SimpleGrid, Text, UnstyledButton } from '@mantine/core'
import { IconShoppingCart } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export function CollectionUiGrid({ collections }: { collections: Collection[] }) {
  return (
    <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="xl">
      {collections.map((collection) => (
        <CollectionUiGridItem key={collection.id} collection={collection} />
      ))}
    </SimpleGrid>
  )
}

export function CollectionUiGridItem({ collection }: { collection: Collection }) {
  return (
    <Card withBorder radius="lg" shadow="lg">
      <Card.Section>
        <UnstyledButton component={Link} to={collection.id}>
          <AspectRatio ratio={16 / 9} mx="auto">
            <Image src={collection.imageUrl} alt={collection.name} />
          </AspectRatio>
        </UnstyledButton>
      </Card.Section>

      <Card.Section className={'classes.section'} m="md">
        <Group justify="space-between">
          <Anchor component={Link} to={collection.id} fz="xl" fw={500}>
            {collection.name}
          </Anchor>
        </Group>
      </Card.Section>

      <Group mx="md" mt="xs" justify="space-between">
        <Text fz="xl" fw={700} c="brand">
          {collection.price} {collection.currency}
        </Text>
        <Button size="lg" radius="mg" leftSection={<IconShoppingCart size={24} stroke={1.5} />}>
          Buy now
        </Button>
      </Group>
    </Card>
  )
}
