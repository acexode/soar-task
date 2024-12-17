import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SettingView } from 'src/sections/settings/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Settings - ${CONFIG.appName}`}</title>
      </Helmet>

      <SettingView />
    </>
  );
}
