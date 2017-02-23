<!-- <script type="text/javascript">
	$(document).ready(function(){
		var animals=["cat","dog","pikachu","charmander"];

		$.each(animals,function(index,value){
			var checkbox="<label for="+value+">"+value+"</label><input type='checkbox' id="+value+" value="+value+" name="+value+">"
			$(".checkBoxContainer").append($(checkbox));
		})
	});
</script> -->

<h1>Custom Follow</h1>
<hr />

<form role="form" class="custom-follow-settings">
	<div class="row">
		<div class="col-sm-10 col-xs-12">
			<p class="lead">
				Follow your favorite categories here.
			</p>
			<div class="checkbox">
				<label for="cid:{../cid}:enabled" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
					<input type="checkbox" class="mdl-switch__input" id="cid:{../cid}:enabled" name="cid:{../cid}:enabled" />
					<span class="mdl-switch__label">{../name}</span>
				</label>
			</div>
<!-- 			<div class="form-group">
				<div class="checkBoxContainer"></div>
			</div> -->
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>