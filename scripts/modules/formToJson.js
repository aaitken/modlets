//Alex Aitken 2011
//Creates JSON map of form field name-value pairs on form submit

define([],function(){
	var formToJson=function(e){ //e = submit event

		var srcObj={}, //object 2b stringified
			forEach=Array.prototype.forEach; //2b used on form.elements, which is an array-like html node collection

		e.preventDefault(); //prevent default form submit
		forEach.call(e.target.elements,function(item){ //function's param via JS spec on forEach (which also includes two others)
			srcObj[item.name]=item.value;
		});
		return JSON.stringify(srcObj);
	};
	return formToJson;
});