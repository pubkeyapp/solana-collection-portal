import { useComputedColorScheme, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { UiHeader, UiHeaderLink, UiLayout } from '@pubkey-ui/core'
import { ReactNode } from 'react'
import { AccountChecker } from './features/account/account-ui'
import { ClusterChecker } from './features/cluster/cluster-ui'

export function AppLayout({
  children,
  links,
  profile,
}: {
  children: ReactNode
  links: UiHeaderLink[]
  profile: ReactNode
}) {
  const [opened, { toggle }] = useDisclosure(false)
  const colorScheme = useComputedColorScheme('dark')
  const { colors } = useMantineTheme()
  const isDark = colorScheme === 'dark'
  return (
    <UiLayout
      styles={{
        main: {
          backgroundColor: isDark ? colors.dark[8] : colors.gray[1],
        },
        header: {
          boxShadow: `0 0px 10px 0 ${isDark ? colors.dark[7] : colors.gray[3]}`,
        },
      }}
      header={<UiHeader opened={opened} toggle={toggle} links={links} profile={profile} />}
    >
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      {children}
    </UiLayout>
  )
}
