my = function(){
	var my={version:"1.0"}
	my.sortBy = function (propertyName){
		return function(obj1,obj2){
			var value1 = obj1[propertyName];
			var value2 = obj2[propertyName];
			if(value1<value2){
				return -1;
			}else if(value1>value2){
				return 1;
			}else{
				return 0;
			}
		};
	}
	//var my.sortBy = sortBy;
	return my;
}();
