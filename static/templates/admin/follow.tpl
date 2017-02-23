<script type="text/javascript">
	$(document).ready(function(){
		var animals=["cat","dog","pikachu","charmander"];

		$.each(animals,function(index,value){
			var checkbox="<label for="+value+">"+value+"</label><input type='checkbox' id="+value+" value="+value+" name="+value+">"
			$(".checkBoxContainer").append($(checkbox));
		})
	});
</script>

<form role="form" class="custom-follow-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">Which Categories Would You Like to Follow?</div>
		<div class="form-group">
			<div class="checkBoxContainer"></div>
		</div>
	</div>
</form>

<button class="btn btn-lg btn-primary" id="save">Save</button>

<script>
	require(['admin/settings'], function(Settings) {
		Settings.prepare();
	});
</script>