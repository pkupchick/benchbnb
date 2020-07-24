

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    
    updateMarkers(benches) {
        const benchArray = Object.values(benches);
        benchArray.forEach(bench => {
            if (!this.markers[bench.id]) {
                this.markers[bench.id] = new google.maps.Marker({
                    position: { lat: bench.lat, lng: bench.lng },
                    map: this.map,
                    id: bench.id
                })
            }
        })
    }

}
