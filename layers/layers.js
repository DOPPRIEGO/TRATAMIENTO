var wms_layers = [];


        var lyr_VISTASATLITE_0 = new ol.layer.Tile({
            'title': 'VISTA SATÉLITE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_VISTAMAPA_1 = new ol.layer.Tile({
            'title': 'VISTA MAPA',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_AREATRATAMIENTO_2 = new ol.format.GeoJSON();
var features_AREATRATAMIENTO_2 = format_AREATRATAMIENTO_2.readFeatures(json_AREATRATAMIENTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREATRATAMIENTO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREATRATAMIENTO_2.addFeatures(features_AREATRATAMIENTO_2);
var lyr_AREATRATAMIENTO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREATRATAMIENTO_2, 
                style: style_AREATRATAMIENTO_2,
                interactive: false,
                title: '<img src="styles/legend/AREATRATAMIENTO_2.png" /> AREA TRATAMIENTO.'
            });
var format_LIMITESCATASTRAL_3 = new ol.format.GeoJSON();
var features_LIMITESCATASTRAL_3 = format_LIMITESCATASTRAL_3.readFeatures(json_LIMITESCATASTRAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESCATASTRAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCATASTRAL_3.addFeatures(features_LIMITESCATASTRAL_3);
var lyr_LIMITESCATASTRAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESCATASTRAL_3, 
                style: style_LIMITESCATASTRAL_3,
                interactive: false,
                title: '<img src="styles/legend/LIMITESCATASTRAL_3.png" /> LIMITES CATASTRAL'
            });
var format_ZONAEXCLUSION_4 = new ol.format.GeoJSON();
var features_ZONAEXCLUSION_4 = format_ZONAEXCLUSION_4.readFeatures(json_ZONAEXCLUSION_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAEXCLUSION_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAEXCLUSION_4.addFeatures(features_ZONAEXCLUSION_4);
var lyr_ZONAEXCLUSION_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAEXCLUSION_4, 
                style: style_ZONAEXCLUSION_4,
                interactive: false,
                title: '<img src="styles/legend/ZONAEXCLUSION_4.png" /> ZONA EXCLUSION'
            });
var format_POLIGONOSDOP_5 = new ol.format.GeoJSON();
var features_POLIGONOSDOP_5 = format_POLIGONOSDOP_5.readFeatures(json_POLIGONOSDOP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSDOP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSDOP_5.addFeatures(features_POLIGONOSDOP_5);
var lyr_POLIGONOSDOP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLIGONOSDOP_5, 
                style: style_POLIGONOSDOP_5,
                interactive: true,
                title: '<img src="styles/legend/POLIGONOSDOP_5.png" /> POLIGONOS DOP'
            });

lyr_VISTASATLITE_0.setVisible(true);lyr_VISTAMAPA_1.setVisible(true);lyr_AREATRATAMIENTO_2.setVisible(true);lyr_LIMITESCATASTRAL_3.setVisible(true);lyr_ZONAEXCLUSION_4.setVisible(true);lyr_POLIGONOSDOP_5.setVisible(true);
var layersList = [lyr_VISTASATLITE_0,lyr_VISTAMAPA_1,lyr_AREATRATAMIENTO_2,lyr_LIMITESCATASTRAL_3,lyr_ZONAEXCLUSION_4,lyr_POLIGONOSDOP_5];
lyr_AREATRATAMIENTO_2.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'PC_PASTOS': 'PC_PASTOS', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', 'layer': 'layer', 'path': 'path', 'AREA': 'AREA', });
lyr_LIMITESCATASTRAL_3.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', 'layer': 'layer', 'path': 'path', });
lyr_ZONAEXCLUSION_4.set('fieldAliases', {'id': 'id', });
lyr_POLIGONOSDOP_5.set('fieldAliases', {'ID_POLIGON': 'ID_POLIGON', 'CD_PROVINC': 'CD_PROVINC', 'CD_MUNICIP': 'CD_MUNICIP', 'CD_POLIGON': 'CD_POLIGON', });
lyr_AREATRATAMIENTO_2.set('fieldImages', {'ID_RECINTO': 'TextEdit', 'CD_PROV': 'Range', 'CD_MUN': 'Range', 'CD_POL': 'Range', 'CD_PARCELA': 'TextEdit', 'CD_RECINTO': 'TextEdit', 'CD_USO': 'TextEdit', 'NU_AREA': 'TextEdit', 'PC_PASTOS': 'Range', 'COEF_REG': 'Range', 'PDTE_MEDIA': 'TextEdit', 'INCIDENCIA': 'TextEdit', 'REGION': 'TextEdit', 'GC': 'TextEdit', 'VER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'AREA': 'TextEdit', });
lyr_LIMITESCATASTRAL_3.set('fieldImages', {'MAPA': 'Range', 'TTGGSS': 'TextEdit', 'NUMSYMBOL': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'NINTERNO': 'TextEdit', 'REFCAT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ZONAEXCLUSION_4.set('fieldImages', {'id': 'TextEdit', });
lyr_POLIGONOSDOP_5.set('fieldImages', {'ID_POLIGON': 'TextEdit', 'CD_PROVINC': 'TextEdit', 'CD_MUNICIP': 'TextEdit', 'CD_POLIGON': 'TextEdit', });
lyr_AREATRATAMIENTO_2.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'no label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'no label', 'PC_PASTOS': 'no label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'no label', 'layer': 'no label', 'path': 'no label', 'AREA': 'no label', });
lyr_LIMITESCATASTRAL_3.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ZONAEXCLUSION_4.set('fieldLabels', {'id': 'no label', });
lyr_POLIGONOSDOP_5.set('fieldLabels', {'ID_POLIGON': 'no label', 'CD_PROVINC': 'no label', 'CD_MUNICIP': 'no label', 'CD_POLIGON': 'no label', });
lyr_POLIGONOSDOP_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});