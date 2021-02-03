// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

export default function(api: IApi) {
  api.logger.info('use plugin html cache');

  api.addHTMLMetas(() => {
    return [
      {
        'http-equiv': 'Pragma',
        content: 'no-cache',
      },
      {
        'http-equiv': 'Cache-control',
        content: 'no-cache',
      },
      {
        'http-equiv': 'Cache',
        content: 'no-cache',
      },
    ];
  });
}
