import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { BuildEnvironment, FullVersion } from '~/constants'
import ValencedIcon from '~assets/RevengeIcon'
import { Setting } from '../constants'
import { CopyableSetting } from './shared'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const ValencedVersionSetting: SettingsItem = CopyableSetting(
    {
        parent: Setting.Valenced,
        IconComponent: () => <TableRowAssetIcon id={ValencedIcon} />,
        useTitle: () => 'Revenge',
    },
    () => `${FullVersion} (${BuildEnvironment})`,
)

export default ValencedVersionSetting
