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
		<div class="col-sm-2 col-xs-12 settings-header">Custom Follow</div>
		<div class="col-sm-10 col-xs-12">
			<p class="lead">
				Adjust these settings. You can then retrieve these settings in code via:
				<code>meta.settings.get('customfollow');</code>
			</p>
			<div class="form-group">
				<div class="checkBoxContainer"></div>
			</div>
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>

