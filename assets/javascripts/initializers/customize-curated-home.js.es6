export default {
  name: "customize-curated-home ",

  initialize: function(container, application) {
    Discourse.DiscoveryCuratedRoute.reopen({
      renderTemplate: function() {
        //this.render('navigation/default', { outlet: 'navigation-bar' });
        this.render('curated_home', { controller: 'discovery/topics', outlet: 'list-container' });
      }
    })

  }
};
