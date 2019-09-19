import Core from '../basic-tools/tools/core.js';

export default class Utils {
	
	static HTMLize(json, prefix) {
        var html = "";
        for (var key in json) {
            if (key == "tilequery") continue;
            var label = Core.Nls(prefix + key);
            html += `<div class='row'><span>${label} : </span><span>${json[key]}</span></div>`;
        }
        
		return `<div class='popup-inner'>${html}</div>`;
    }
}
