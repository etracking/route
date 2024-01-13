var wms_layers = [];


        var lyr_ib20000_0 = new ol.layer.Tile({
            'title': 'ib20000',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://istw.hkirscout.org.hk/2023-06-QPNG/{z}/{x}/{y}.png'
            })
        });

lyr_ib20000_0.setVisible(true);
var layersList = [lyr_ib20000_0];
