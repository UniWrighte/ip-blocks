ip-blocks is used to generate an IP at a specific index in a range of IPv4 addresses.

install ip-blocks:

    npm i ip-blocks

import ip-blocks:

    const ipblocks = require('ip-blocks');


use ip-blocks:

    const ipArray = ipblocks("192.168.0.1", 23, 0);
	console.log({ipArray});
	//{ipArray: [ 192, 168, 0, 1 ]}

	const highIndexIP = ipblocks("192.168.0.1", 23, 600);
	console.log({highIndexIP});
	//throws error, out of subnet


NOTE: future versions may return a string by default. Version information will remain in README to assist in compatibility when/if breaking changes occur. 