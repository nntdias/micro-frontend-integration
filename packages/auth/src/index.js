import 'core-js/features/object/assign';
import 'core-js/features/number/is-nan';
import 'core-js/features/promise';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

import('./bootstrap').then(({ mount }) => {
	mount(document.getElementById('root'));
});
