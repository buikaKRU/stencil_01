import { Config } from '@stencil/core';
import { less } from '@stencil/less'

export const config: Config = {
  namespace: 'components-library',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    { type: 'docs-json', file: '/dist/collection.json' },
    { type: 'docs-json', file: '/src/collection.json' },
    
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    
  ],
  plugins: [
    less({
      injectGlobalPaths: [
        'src/styles/variables.less',
        'src/styles/mixins.less',

        'src/styles/snow_variables-font.less',
        'src/styles/snow_variables.less',
        'src/styles/snow_typography.less',
      ]
    })
  ]
};
