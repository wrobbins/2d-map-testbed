var map;
$( document ).ready(function(){loaded();});

function loaded() {

	//http://paletton.com/#uid=1000u0k00pB00Tp00vE01ka0oet
	var container = $('#container')[0];
	map = new Datamap({
		element: container,
		responsive: true,
		geographyConfig: {
			popupOnHover: true,
			highlightOnHover: true,
			highlightFillColor: '#737272',
			highlightBorderColor: '#000000',
			popupTemplate: function(geo, data) {
				return ['<div>' + geo.properties.name + '</div>'].join('');
			}
		},
		fills: {
			defaultFill: '#A1A1A1'
		}
	});

	d3.select(window).on('resize', function() {
		map.resize();
	});

	$('input[name=mapColor]').val(map.options.fills.defaultFill);
	$('input[name=highlightColor]').val(map.options.geographyConfig.highlightFillColor);
	$('input[name=highlightBorderColor]').val(map.options.geographyConfig.highlightBorderColor);
}

function applyMapColors() {
	map.updateChoropleth(null, {
		reset: true
	});
}

function changeMapColor(input) {
	var newColor = input.value;
	map.options.fills.defaultFill = newColor;
	applyMapColors();

}

function changehighlightColor(input) {
	var newColor = input.value;
	map.options.geographyConfig.highlightFillColor = newColor;
	applyMapColors();
}

function changehighlightOutlineColor(input) {
	var newColor = input.value;
	map.options.geographyConfig.highlightBorderColor = newColor;
	applyMapColors();
}
