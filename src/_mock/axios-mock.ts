import AxiosMockAdapter from 'axios-mock-adapter';

import axiosInstance from 'src/utils/axios';



// ----------------------------------------------------------------------

const axiosMockAdapter = new AxiosMockAdapter(axiosInstance, {
  delayResponse: 0
});

export default axiosMockAdapter;
