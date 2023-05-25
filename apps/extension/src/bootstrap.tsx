import { Overrides, StribordOverrides } from '@stribord/react-client';
import RemoteApp from '@stribord-examples/app/app';
import React from 'react';
import ReactDOM from 'react-dom';

import manifest from './manifest';

const overrides: Overrides = {
  '@stribord-examples/extension': manifest
};

ReactDOM.render(
  <StribordOverrides value={overrides}>
    <RemoteApp />
  </StribordOverrides>,
  document.getElementById('root')
);
