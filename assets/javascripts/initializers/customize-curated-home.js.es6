export default {
  name: "customize-curated-home",

  initialize: function(container, application) {
    Discourse.DiscoveryCuratedRoute.reopen({
      actions: {
        expandForUsername: function(username) {
          username = username.replace(/^@/, '');
          if (!Em.isEmpty(username)) {
            this.controllerFor('poster-expansion').show(username);
          }
        },
      },
      renderTemplate: function() {
        //this.render('navigation/default', { outlet: 'navigation-bar' });
        this.render('curated_home', { controller: 'discovery/topics', outlet: 'list-container' });
      }
    })

  }
};
