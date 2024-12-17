import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ComingSoon } from 'src/sections/coming-soon/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Coming Soon - ${CONFIG.appName}`}</title>
        <meta
          name="Soar Task"
        />
        <meta name="keywords" content="" />
      </Helmet>

      <ComingSoon />
    </>
  );
}
