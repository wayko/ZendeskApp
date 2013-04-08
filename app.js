// icon info
//Part of: Windows 8 Metro UI icon pack
//Author: Kirby, http://dakirby309.deviantart.com
//License: CC Attribution

// Usage of iframe with user data. Sample
(function() {

	return {

		events: {
			// When activated
			'app.activated': function(data){
				// show interface
				this.switchTo('pane', {
						desc: this.I18n.t('desc')
					}
				);
				
				// run iframe
				var ticket = this.ticket(); //get ticket
				
			}
		}
	};
}());