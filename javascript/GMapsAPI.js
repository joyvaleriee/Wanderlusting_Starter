var GMap = (function() {
    
    var _helpers = {
        getEventLatLng: function _getEventLatLng( event ) {
            return {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            };
        },
        getCenter: function _getCenter( map ) {
            return map.getCenter();
        }
        // you may add additional helper methods here as you need
    };
    
    
    function GMap( mapEl, opts ) {
        this.mapEl = mapEl;
        this.opts = opts;
        
        if (typeof google === 'object' && typeof google.maps === 'object') {
            this.map = new google.maps.Map(
                document.getElementById( mapEl ),
                opts
            );   
        }
        
        return this;
    }
    
    function _onBoundEventCalled( cb, event ) {
        if ( !cb ) return;
        cb( event, _helpers, this.map, this.opts, this.mapEl );
        
    }
    GMap.prototype.bindEventHandler = function( eventName, callback ) {
        google.maps.event.addListener(
            this.map, 
            eventName, 
            _onBoundEventCalled.bind(this, callback)
        );
        
        return this;
    };
    
    return {
        init: function( mapEl, opts ) {
            return new GMap( mapEl, opts );
        }
    };
})();










