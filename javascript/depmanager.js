var DepManager = (function() {
    
    function __( scriptUrl, varToCheck ) {
        console.log( scriptUrl );
        
        if ( typeof scriptUrl === "undefined" ) {
            return new Promise(function(resolve, reject){
                reject('No url given');
            });
        }
        
        if ( typeof window[ varToCheck ] !== "undefined" ) {
            return new Promise(function(resolve, reject){
                resolve('Already loaded!');
            }); 
        }
        
        return new Promise(function( resolve, reject ) {
            var script = document.createElement( 'script' );
            script.async = true;
            
            console.log('loading...');
            
            script.onload = function() {
                resolve( script );
                console.log('done')
            }
            
            script.onerror = function() {
                reject( script );
            }
            
            script.src = scriptUrl;
            
            document.getElementsByTagName('body')[ 0 ].appendChild( script );
        });
    }
    
    return __;
})();

