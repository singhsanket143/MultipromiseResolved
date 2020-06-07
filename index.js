// Helper function to replace the inbuilt Promise.all Function

'use strict';

let allPromises = (values) => {
	return new Promise((resolve, reject) => {
		// Create a results array to store results of all promises
		let results = [];
		// Counter to keep a track if all promises have been resolved or not
		let finished = 0;

		// Iterate over all the promises passed in the values array
		values.forEach((currentPromise, index) => {
			// One by one start resolving the promises
			Promise.resolve(currentPromise).then((result) => {
				// After resolution store the result in the array
				results[finished] = result;
				finished += 1

				// Check if all the promises have been resolved or not
				if (finished === values.length) {
					resolve(results);
				}
			}).catch((err) => {
				console.log("Error Occured: ", err);
				reject(err);
			});
		});
	});
};

module.exports = allPromises;