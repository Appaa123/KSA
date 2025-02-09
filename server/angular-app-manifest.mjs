
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/KSA/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/KSA"
  },
  {
    "renderMode": 2,
    "route": "/KSA/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/KSA/farmstock"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27908, hash: '57dc9249021da9fb8e264ddcbe5c94c7ce3b5fe159492928cd02366d1c074fd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17211, hash: '92113dc2d25b5620d2edefd81df0ee3044a2ecc2397e8e4560effd83ea3d2b28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28337, hash: 'b39a9ef493d15aa3289ac5645fa4828d8895f8a5d61dede72c1c6b1293c1f5f6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'farmstock/index.html': {size: 28355, hash: 'f78429d52e49104a7d3ada7dee4aad52436d01e45e9a32334ffd226a86173e88', text: () => import('./assets-chunks/farmstock_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 48866, hash: '4bfd812c71f84cbfb553bb77f314f0cfd09ddd70f92af12ef4d38b56ce8d82a1', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-63PMUIWA.css': {size: 238590, hash: 'bWTlSPeaBYE', text: () => import('./assets-chunks/styles-63PMUIWA_css.mjs').then(m => m.default)}
  },
};
