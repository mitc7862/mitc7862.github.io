require([
    "esri/views/MapView",
    "esri/widgets/Legend",
    "esri/WebMap"
], function (MapView, Legend, WebMap) {
    var webmap = new WebMap({
        portalItem: {
            id: "8acd52bfe1a4444087934b5a61f712c7"
        }
    });

    var view = new MapView({
        container: "viewDiv",
        map: webmap,
        navigation: { mouseWheelZoomEnabled: false }
    });

    view.scale = 50000000;

    view.when(function () {
        var featureLayer = webmap.layers.getItemAt(3);

        var legend = new Legend({
            view: view,
            layerInfos: [
                {
                    layer: featureLayer,
                    title: ""
                }
            ]
        });

        view.ui.add(legend, "bottom-right");
    });

});
