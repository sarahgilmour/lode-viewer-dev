import Dom from '../basic-tools/tools/dom.js';
import Core from '../basic-tools/tools/core.js';
import Popup from '../basic-tools/components/popup.js';

export default class Splash extends Popup { 
	
	constructor() {
		super();
		
		this.Node("continue").addEventListener("click", function(ev) {
			this.onBtnClose_Click(ev);
			
			this.callback();
		}.bind(this));
	}
	
	onBtnClose_Click(ev) {
		super.onBtnClose_Click(ev);
		
		this.callback();
	}
		
	Show(callback) {
		super.Show();
		
		// TODO : Need to use promise but stupid ie11
		this.callback = callback;
	}
	
	Template() {
		return "<div handle='root' class='popup modal'>" +
				  "<div class='popup-container'>" +
					  "<button class='close' handle='close'>×</button>" +
					  "<div class='popup-body' handle='body'>" + 
						  "<h1>nls(Splash_LODE_Title)</h1>" + 
						  "<hr>" + 
						  "<p class='warning'>nls(Splash_Warning)</p>" + 
						  "<hr>" + 
						  "<p>nls(Splash_LODE_1)</p>" + 
						  "<div class='logo-container'>" + 
						    "<img class='logo' src='assets/lode-logo.png' />" +
						  "</div>" +
						  "<p>nls(Splash_LODE_2)</p>" + 
						  "<p>nls(Splash_LODE_3)</p>" + 
						"<hr>" + 
						"<div class='wip-container'>" +
							"<div><img src='assets/warning.png' /></div>" +
							"<div>nls(Splash_WIP)</div>" + 
						"</div>" +
						"<div class='continue-container'>" + 
					      "<button class='continue' handle='continue'>nls(Splash_Continue)</button>" +
					    "</div>" +
					  "</div>" +
				  "</div>" +
			  "</div>";
	}
}