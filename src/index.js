/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  var k1, k2, k3;
  var pos = [];
  
  for(var i = 0; i < preferences.length; i++){
	if(pos.indexOf(i) === -1){
		k1 = preferences[i];
	    k2 = preferences[k1-1];
	    k3 = preferences[k2-1];
		
	    if (k3 == i+1 && k2 !== k3) {
		  count++;
		  pos.push(k1-1);
		  pos.push(k2-1);
	    }	  
	}
		
  }
		
		
  return count;
};
