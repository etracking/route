var size = 0;
var placement = 'point';

var style_1032024_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "32.5px \'Helvetica\', sans-serif";
    var labelFill = "#ee17ea";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("CP") !== null) {
        labelText = String(feature.get("CP"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,81,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(238,23,234,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
