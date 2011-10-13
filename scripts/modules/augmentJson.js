//Alex Aitken 2011
//augment a passed-in JSON string with additional fields/values

define([],function(){
	var augmentJson=function(jsonStr,augmentation){
		jsonStr=jsonStr.slice(0,jsonStr.lastIndexOf('}'))+',';
		jsonStr+=augmentation+'}';
		return jsonStr;
	};
	return augmentJson;
});
