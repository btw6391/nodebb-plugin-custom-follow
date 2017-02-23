<form role="form" class="custom-follow-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">Which Categories Would You Like to Follow?</div>
		<div class="form-group">
			<label for="cloneFromCid">Available Categories</label>
			<input type="checkbox" value="{categories.cid}">{categories.name}
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>