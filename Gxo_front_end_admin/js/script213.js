$(document).ready(function(){
	jq213 = jQuery.noConflict(true);
	jq213('.bottom-item :checkbox').rcSwitcher({
		blobOffset: 2,
	}).on('change.rcSwitcher',function(e,data){
		console.log(data.$input['context'].checked);
	})

	
})