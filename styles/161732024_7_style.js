var size = 0;
var placement = 'point';

var style_161732024_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "23.400000000000002px \'Microsoft JhengHei\', sans-serif";
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
            stroke: new ol.style.Stroke({color: 'rgba(238,23,234,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(152,125,183,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
