/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(root){

	const path = require('path')
	const url = require('url')
        
        root.CuttingLayouts = new CuttingLayouts();
	
	function CuttingLayouts(){
            
                var self = this;
		
		var svg = null;
                
                // list of imported files
		// import: {filename: 'blah.svg', svg: svgroot}
		this.imports = [];
                
		// list of all extracted parts
		// part: {name: 'part name', quantity: ...}
		this.parts = [];
                
                this.importsvg = function(filename, dirpath, svgstring, scalingFactor, dxfFlag){
			// parse svg
			// config.scale is the default scale, and may not be applied
			// scalingFactor is an absolute scaling that must be applied regardless of input svg contents
			svg = SvgParser.load(dirpath, svgstring, config.scale, scalingFactor);
			svg = SvgParser.clean(dxfFlag);
			
			if(filename){
				this.imports.push({
					filename: filename,
					svg: svg
				});
			}
			
			var parts = this.getParts(svg.children);
			for(var i=0; i<parts.length; i++){
				this.parts.push(parts[i]);
			}
			
		}
        }
}

