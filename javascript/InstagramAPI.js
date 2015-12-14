var InstagramAPI = (function() {
    var APIURL = 'https://api.instagram.com/';
    var VERSION = 'v1/';
    var DATA = {
        dataType: 'jsonp',
        type: 'GET'
    }
    
    function _getRoute( endpoint ) {
        return APIURL + VERSION + endpoint;
    }
    
    function InstagramAPI( accessToken, clientId ) {
        this.accessToken = accessToken;
        this.defaultOpts = {
            // access_token: this.accessToken,
            client_id: clientId
        };
        console.log( this.defaultOpts)
    }
    
    InstagramAPI.prototype.endpoint = function( path, opts, onSuccess, onFail ) {
        var endpoint = path;
        
        var url = _getRoute( endpoint );
        var options = $.extend({}, this.defaultOpts, opts);
        var ajaxOpts = $.extend({}, DATA, {
            url: url,
            data: options,
            success: onSuccess,
            error: onFail
        });
        
        $.ajax( ajaxOpts )
    }
    
    return {
        init: function( accessToken, clientId ) {
            return new InstagramAPI( accessToken, clientId );
        }
    }
})();
